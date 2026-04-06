// @ts-check

/**
 * This script generates the src/protobufs directory from the proto files in the
 * repos specified in `REPOS`. It uses `buf` to generate TS files from the proto
 * files, and then generates an `index.ts` file to re-export the generated code.
 */

import { spawnSync } from "child_process";
import degit from "degit";
import {
  mkdirSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
} from "fs";
import { globSync } from "glob";
import { capitalize } from "lodash-es";
import { dirname, join, relative } from "path";
import { fileURLToPath } from "url";

/**
 * Generates a buf.gen.yaml content with rewrite_imports configured for the SDK.
 * This uses buf's native import rewriting instead of post-processing files.
 * @param {string} sdkKey - e.g. "sdk47" or "sdk53"
 * @returns {string}
 */
const generateBufGenYaml = (sdkKey) => `# Generated dynamically for ${sdkKey}
version: v1
plugins:
  - plugin: es
    opt:
      - target=ts
      - rewrite_imports=./**/*_pb.js:cosmes/protobufs/${sdkKey}
    out: .
  - plugin: cosmes
    path: ./scripts/protoc-gen-cosmes.mjs
    opt: target=ts
    out: .
`;

/**
 * @typedef Repo
 * @type {object}
 * @property {string} repo - Git repo and branch to clone
 * @property {string[]} paths - Paths to proto files relative to the repo root
 * @property {object} [options] - Degit options
 */

/**
 * TODO: Add more repos here when necessary.
 * @type {Repo[]}
 */
const BASE_REPOS = [
  {
    repo: "cosmos/ics23#master",
    paths: ["proto"],
  },
  {
    repo: "cosmos/ibc-go#main",
    paths: ["proto"],
  },
  {
    repo: "osmosis-labs/osmosis#main",
    paths: ["proto"],
  },
  {
    repo: "InjectiveLabs/sdk-go#master",
    paths: ["proto"],
  },
  {
    repo: "evmos/ethermint#main",
    paths: ["proto"],
  },
  {
    repo: "dymensionxyz/osmosis#main-dym",
    paths: ["proto"],
  },
  {
    repo: "classic-terra/core#main",
    paths: ["proto"],
  },
  {
    repo: "git@github.com:vsc-blockchain/core#main",
    paths: ["proto"],
    options: {
      mode: 'git',
    }
  },
];

const SDK_CONFIGS = [
  {
    key: "sdk47",
    cosmosSdkRepo: "cosmos/cosmos-sdk#v0.47.9",
    cosmosSdkOptions: {
      mode: "git",
    },
    extraRepos: [
      {
        repo: "CosmWasm/wasmd#v0.45.0",
        paths: ["proto"],
      },
    ],
  },
  {
    key: "sdk53",
    cosmosSdkRepo: "cosmos/cosmos-sdk#v0.53.4",
    cosmosSdkOptions: {
      mode: "git",
    },
    extraRepos: [
      {
        repo: "CosmWasm/wasmd#v0.61.4",
        paths: ["proto"],
      },
    ],
  },
];

/** @param {string} cosmosSdkRepo @param {object | undefined} cosmosSdkOptions @param {Repo[] | undefined} extraRepos */
const getRepos = (cosmosSdkRepo, cosmosSdkOptions, extraRepos) => [
  {
    repo: cosmosSdkRepo,
    paths: ["proto"],
    options: cosmosSdkOptions,
  },
  ...BASE_REPOS,
  ...(extraRepos ?? []),
];

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROTOBUFS_DIR = join(__dirname, "..", "src", "protobufs");
const TMP_DIR = join(PROTOBUFS_DIR, ".tmp");
/** Generates a unique dirname from `repo` to use in `TMP_DIR`. */
const id = (/** @type {string} */ repo) => repo.replace(/[#/]/g, "-");

/**
 * Extracts exported entries from a generated index file.
 * @param {string} indexPath
 * @param {string} rootDir
 */
const getExportEntriesFromIndex = (indexPath, rootDir) => {
  const code = readFileSync(indexPath, "utf8");
  const exportBlockRegex = /export\s*{\s*([\s\S]*?)\s*}\s*from\s*["']([^"']+)["'];/gm;
  /** @type {Array<{ exportName: string; sourceName: string; sourceFile: string }>} */
  const entries = [];
  for (const match of code.matchAll(exportBlockRegex)) {
    const exportList = match[1];
    const sourceFile = match[2];
    const items = exportList
      .split(",")
      .map((entry) => entry.trim())
      .filter(Boolean);
    for (const item of items) {
      const parts = item.split(/\s+as\s+/);
      const sourceName = (parts[0] ?? "").trim();
      const exportName = (parts[1] ?? parts[0]).trim();
      if (!sourceName || !exportName) {
        continue;
      }
      entries.push({
        exportName,
        sourceName,
        sourceFile: join(rootDir, sourceFile.replace(/\.js$/, ".ts")),
      });
    }
  }
  const unique = new Map();
  for (const entry of entries) {
    if (!unique.has(entry.exportName)) {
      unique.set(entry.exportName, entry);
    }
  }
  return [...unique.values()].sort((a, b) =>
    a.exportName.localeCompare(b.exportName)
  );
};

/**
 * Determines if a symbol is exported as a type (class/interface/type/enum).
 * @param {string} sourceFile
 * @param {string} sourceName
 */
const isTypeSymbol = (sourceFile, sourceName) => {
  const code = readFileSync(sourceFile, "utf8");
  const patterns = [
    new RegExp(`export\\s+class\\s+${sourceName}\\b`),
    new RegExp(`export\\s+interface\\s+${sourceName}\\b`),
    new RegExp(`export\\s+type\\s+${sourceName}\\b`),
    new RegExp(`export\\s+enum\\s+${sourceName}\\b`),
  ];
  return patterns.some((pattern) => pattern.test(code));
};

console.log("Initialising directories...");
{
  rmSync(PROTOBUFS_DIR, { recursive: true, force: true });
  rmSync(TMP_DIR, { recursive: true, force: true });
  mkdirSync(PROTOBUFS_DIR);
  mkdirSync(TMP_DIR);
}

for (const config of SDK_CONFIGS) {
  const repos = getRepos(
    config.cosmosSdkRepo,
    config.cosmosSdkOptions,
    config.extraRepos
  );
  const outputDir = join(PROTOBUFS_DIR, config.key);
  const tmpDir = join(TMP_DIR, config.key);

  console.log(`Cloning required repos for ${config.key}...`);
  {
    mkdirSync(outputDir, { recursive: true });
    mkdirSync(tmpDir, { recursive: true });
    await Promise.all(
      repos.map(({ repo, options }) =>
        degit(repo, options).clone(join(tmpDir, id(repo)))
      )
    );
  }

  console.log(`Generating TS files from proto files for ${config.key}...`);
  {
    // Generate a dynamic buf.gen.yaml with rewrite_imports for this SDK version
    const bufGenYamlPath = join(process.cwd(), `buf.gen.${config.key}.yaml`);
    writeFileSync(bufGenYamlPath, generateBufGenYaml(config.key));

    for (const { repo, paths } of repos) {
      for (const path of paths) {
        spawnSync(
          "pnpm",
          [
            "buf",
            "generate",
            join(tmpDir, id(repo), path),
            "--template",
            bufGenYamlPath,
            "--output",
            outputDir,
          ],
          {
            cwd: process.cwd(),
            stdio: "inherit",
          }
        );
      }
      console.log(`✔️ [${repo}]`);
    }

    // Clean up the dynamic buf.gen.yaml
    rmSync(bufGenYamlPath, { force: true });
  }

  console.log(`Generating ${config.key}/index.ts file and renaming exports...`);
  {
    const LAST_SEGMENT_REGEX = /[^/]+$/;
    const EXPORTED_NAME_REGEX = /^export \w+ (\w+) /gm;
    let contents =
      "/** This file is generated by gen-protobufs.mjs. Do not edit. */\n\n";
    /**
     * Builds the `src/proto/index.ts` file to re-export generated code.
     * A prefix is added to the exported names to avoid name collisions.
     * The prefix is the names of the directories in `proto` leading up
     * to the directory of the exported code, concatenated in PascalCase.
     * For example, if the exported code is in `proto/foo/bar/goo.ts`, the
     * prefix will be `FooBar`.
     * @param {string} dir
     * @param {string} rootDir
     */
    function generateIndexExports(dir, rootDir) {
      const files = globSync(join(dir, "*"));
      if (files.length === 0) {
        return;
      }
      const relativeDir = relative(rootDir, dir);
      const prefixName = relativeDir
        ? relativeDir
            .split("/")
            .map((name) =>
              // convert all names to PascalCase
              name.split(/[-_]/).map(capitalize).join("")
            )
            .join("")
        : "";
      for (const file of files) {
        const fileName = file.match(LAST_SEGMENT_REGEX)?.[0];
        if (!fileName) {
          console.error("Could not find name for", file);
          continue;
        }
        if (!fileName.endsWith(".ts")) {
          continue;
        }
        const code = readFileSync(file, "utf8");
        contents += `export {\n`;
        for (const match of code.matchAll(EXPORTED_NAME_REGEX)) {
          const exportedName = match[1];
          contents += `  ${exportedName} as ${prefixName + exportedName},\n`;
        }
        const exportedFile = relative(rootDir, file).replace(".ts", ".js");
        contents += `} from "./${exportedFile}";\n`;
      }
      for (const file of files) {
        generateIndexExports(file, rootDir);
      }
    }
    generateIndexExports(outputDir, outputDir);
    writeFileSync(join(outputDir, "index.ts"), contents);
  }

  console.log(`Rewriting Injective's legacy CosmWasm dependencies for ${config.key}...`);
  {
    const path = join(
      outputDir,
      "injective",
      "wasmx",
      "v1",
      "proposal_pb.ts"
    );
    if (statSync(path, { throwIfNoEntry: false })) {
      const contents = readFileSync(path, "utf8").replace(
        "proposal_pb.js",
        "proposal_legacy_pb.js"
      );
      writeFileSync(path, contents);
    }
  }
}

console.log("Generating src/protobufs/index.ts file...");
{
  const exportEntries = getExportEntriesFromIndex(
    join(PROTOBUFS_DIR, "sdk47", "index.ts"),
    join(PROTOBUFS_DIR, "sdk47")
  );
  const sdk47Imports = exportEntries
    .map((entry) => `  ${entry.exportName} as sdk47${entry.exportName},`)
    .join("\n");
  const sdk53Imports = exportEntries
    .map((entry) => `  ${entry.exportName} as sdk53${entry.exportName},`)
    .join("\n");
  let contents =
    "/** This file is generated by gen-protobufs.mjs. Do not edit. */\n\n" +
    `import {\n${sdk47Imports}\n} from \"./sdk47/index.js\";\n` +
    `import {\n${sdk53Imports}\n} from \"./sdk53/index.js\";\n\n` +
    "export type SdkVersion = \"sdk47\" | \"sdk53\";\n" +
    "let activeVersion: SdkVersion = \"sdk47\";\n" +
    "const chainSdkVersions = new Map<string, SdkVersion>();\n" +
    "const endpointSdkVersions = new Map<string, SdkVersion>();\n" +
    "const logSdk = (...args: unknown[]) => {\n" +
    "  // Enable via globalThis.COSMES_DEBUG_SDK = true\n" +
    "  if ((globalThis as { COSMES_DEBUG_SDK?: boolean }).COSMES_DEBUG_SDK) {\n" +
    "    console.log(\"[cosmes/sdk]\", ...args);\n" +
    "  }\n" +
    "};\n\n" +
    "export const setActiveSdkVersion = (version: SdkVersion) => {\n" +
    "  if (activeVersion === version) {\n" +
    "    return;\n" +
    "  }\n" +
    "  logSdk(\"setActiveSdkVersion\", { from: activeVersion, to: version });\n" +
    "  activeVersion = version;\n" +
    "  applyActive();\n" +
    "};\n" +
    "export const getActiveSdkVersion = () => activeVersion;\n" +
    "export const setChainSdkVersion = (chainId: string, version: SdkVersion) => {\n" +
    "  logSdk(\"setChainSdkVersion\", { chainId, version });\n" +
    "  chainSdkVersions.set(chainId, version);\n" +
    "};\n" +
    "export const getChainSdkVersion = (chainId: string) =>\n" +
    "  chainSdkVersions.get(chainId) ?? activeVersion;\n" +
    "export const useChainSdkVersion = (chainId: string) =>\n" +
    "  setActiveSdkVersion(getChainSdkVersion(chainId));\n" +
    "export const setEndpointSdkVersion = (endpoint: string, version: SdkVersion) => {\n" +
    "  logSdk(\"setEndpointSdkVersion\", { endpoint, version });\n" +
    "  endpointSdkVersions.set(endpoint, version);\n" +
    "};\n" +
    "export const getEndpointSdkVersion = (endpoint: string) =>\n" +
    "  endpointSdkVersions.get(endpoint) ?? activeVersion;\n" +
    "export const useEndpointSdkVersion = (endpoint: string) =>\n" +
    "  setActiveSdkVersion(getEndpointSdkVersion(endpoint));\n\n" +
    "export * as sdk47 from \"./sdk47/index.js\";\n" +
    "export * as sdk53 from \"./sdk53/index.js\";\n\n";

  for (const entry of exportEntries) {
    const typeRef = isTypeSymbol(entry.sourceFile, entry.sourceName)
      ? `import(\"./sdk47/index.js\").${entry.exportName}`
      : `typeof import(\"./sdk47/index.js\").${entry.exportName}`;
    contents += `export type ${entry.exportName} = ${typeRef};\n`;
  }
  contents += "\n";

  for (const entry of exportEntries) {
    contents += `export let ${entry.exportName}: typeof import(\"./sdk47/index.js\").${entry.exportName} = sdk47${entry.exportName};\n`;
  }

  contents += "\nconst applySdk47 = () => {\n";
  for (const entry of exportEntries) {
    contents += `  ${entry.exportName} = sdk47${entry.exportName};\n`;
  }
  contents += "};\n";
  contents += "const applySdk53 = () => {\n";
  for (const entry of exportEntries) {
    contents += `  ${entry.exportName} = sdk53${entry.exportName};\n`;
  }
  contents += "};\n";
  contents += "const applyActive = () => {\n";
  contents += "  if (activeVersion === \"sdk53\") {\n";
  contents += "    applySdk53();\n";
  contents += "    return;\n";
  contents += "  }\n";
  contents += "  applySdk47();\n";
  contents += "};\napplyActive();\n";

  writeFileSync(join(PROTOBUFS_DIR, "index.ts"), contents);
}

console.log("Cleaning up...");
{
  rmSync(TMP_DIR, { recursive: true, force: true });
}

console.log("Proto generation completed successfully!");
