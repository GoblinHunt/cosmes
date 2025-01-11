import { Secp256k1PubKey, getAccount, toBaseAccount } from "cosmes/client";
import { CosmosCryptoSecp256k1PubKey } from "cosmes/protobufs";

import { WalletName } from "../../constants/WalletName";
import { WalletType } from "../../constants/WalletType";
import { WalletConnectV1 } from "../../walletconnect/WalletConnectV1";
import { ConnectedWallet } from "../ConnectedWallet";
import { ChainInfo, WalletController } from "../WalletController";
import { WalletError } from "../WalletError";
import { LUNCDashWalletConnectV1 } from "./LUNCDashWalletConnectV1";

const TERRA_CLASSIC_MAINNET_CHAIN_ID = "columbus-5";
const TERRA_CLASSIC_TESTNET_CHAIN_ID = "rebel-2";
const TERRA_MAINNET_CHAIN_ID = "phoenix-1";
const TERRA_TESTNET_CHAIN_ID = "pisco-1";
const COIN_TYPE_330_CHAINS = [
  TERRA_CLASSIC_MAINNET_CHAIN_ID,
  TERRA_CLASSIC_TESTNET_CHAIN_ID,
  TERRA_MAINNET_CHAIN_ID,
  TERRA_TESTNET_CHAIN_ID,
];

export class LUNCDashController extends WalletController {
  private readonly wc: WalletConnectV1;

  constructor() {
    super(WalletName.LUNCDASH);
    this.wc = new WalletConnectV1(
      "cosmes.wallet.luncdash.wcSession",
      {
        name: "LUNC Dash",
        android: "",
        ios: "",
        isStation: true,
        isLuncDash: true,
      },
      {
        bridge: "https://walletconnect.luncdash.com",
        signingMethods: [],
      }
    );
    this.registerAccountChangeHandlers();
  }

  public async isInstalled(type: WalletType) {
    return type === WalletType.EXTENSION ? false : true;
  }

  protected async connectWalletConnect<T extends string>(
    chains: ChainInfo<T>[]
  ) {
    for (const { chainId } of chains) {
      // Station mobile's WallectConnect only supports these chains
      // TODO: update when Station mobile supports more chains
      if (COIN_TYPE_330_CHAINS.includes(chainId)) {
        continue;
      }
      throw new Error(`${chainId} not supported`);
    }
    const wallets = new Map<T, ConnectedWallet>();
    const wc = await WalletError.wrap(this.wc.connect());
    // Station mobile only returns 1 address for now
    // TODO: update when Station mobile supports more chains
    const address = wc.accounts[0];
    for (let i = 0; i < chains.length; i++) {
      const { chainId, rpc, gasPrice } = chains[i];
      try {
        // Since Station's WalletConnect doesn't support getting pub keys, we
        // need to query the account to get it. However, if the wallet does
        // not contain funds, the RPC will throw errors.
        const key = await WalletError.wrap(
          this.getPubKey(chainId, rpc, address)
        );
        wallets.set(
          chainId,
          new LUNCDashWalletConnectV1(
            undefined,
            wc,
            chainId,
            key,
            address,
            rpc,
            gasPrice
          )
        );
      } catch (err) {
        // We simply log and ignore the error for now
        console.warn(err);
      }
    }
    this.wc.cacheSession(wc);
    return { wallets, wc: this.wc };
  }

  protected async connectExtension<T extends string>(chains: ChainInfo<T>[]) {
    throw new Error("Extension is not installed");

    return new Map<T, ConnectedWallet>();
  }

  protected registerAccountChangeHandlers() {
  /*  onWindowEvent("station_wallet_change", () =>
      this.changeAccount(WalletType.EXTENSION)
    );
    onWindowEvent("station_network_change", () =>
      this.changeAccount(WalletType.EXTENSION)
    );*/
    // Station's WalletConnect v1 doesn't support account change events
  }

  private async getPubKey(
    chainId: string,
    rpc: string,
    address: string
  ): Promise<Secp256k1PubKey> {
    const account = await getAccount(rpc, { address });
    const { pubKey } = toBaseAccount(account);
    if (!pubKey) {
      throw new Error("Unable to get pub key");
    }
    // TODO: handle other key types (?)
    return new Secp256k1PubKey({
      chainId,
      key: CosmosCryptoSecp256k1PubKey.fromBinary(pubKey.value).key,
    });
  }
}