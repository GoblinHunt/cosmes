import { Secp256k1PubKey } from "cosmes/client";

import { WalletName } from "../../constants/WalletName";
import { WalletType } from "../../constants/WalletType";
import { ConnectedWallet } from "../ConnectedWallet";
import { ChainInfo, WalletController } from "../WalletController";
import { WalletError } from "../WalletError";
import { DaoDaoExtension } from "./DaoDaoExtension";
import { WalletConnectV2 } from "cosmes/wallet/walletconnect/WalletConnectV2";
import { Cosmiframe } from "@dao-dao/cosmiframe";
import { WalletConnectV1 } from "cosmes/wallet/walletconnect/WalletConnectV1";

const cosmiframe = new Cosmiframe([
  "https://daodao.zone",
  "https://dao.daodao.zone",
]);

type Options = { feeDenom: string };

export class DaoDaoController extends WalletController {
  private readonly options?: Options;
  
  constructor(options?: Options) {
    super(WalletName.DAODAO);
    this.options = options;
    this.registerAccountChangeHandlers();
  }

  public async isInstalled(type: WalletType) {
    if (type === WalletType.EXTENSION) {
      return !!(await cosmiframe.isReady());
    }
    return false;
  }

  protected async connectWalletConnect<T extends string>(
    chains: ChainInfo<T>[]
  ): Promise<{
      wallets: Map<T, ConnectedWallet>;
      wc: WalletConnectV1 | WalletConnectV2;
    }> {
    throw new WalletError("DA0DA0 has no WalletConnect", null);
  }

  public disconnect(chainIds: string[]): void {
    super.disconnect(chainIds);
  }

  protected async connectExtension<T extends string>(chains: ChainInfo<T>[]) {
    const wallets = new Map<T, ConnectedWallet>();

    if (!(await cosmiframe.isReady())) {
      throw new WalletError("DAO DAO Cosmiframe not ready", null);
    }

    for (const chain of chains) {
      try {
        const account = await cosmiframe.p
          .connect(chain.chainId)
          .then(() =>
            cosmiframe.p
              .getAccount(chain.chainId)
              .then(
                (account) => account
              )
          );
          
        if (!account) {
          throw new WalletError("DAO DAO Cosmiframe failed to connect, no account returned", null);
        }

        wallets.set(
          chain.chainId,
          new DaoDaoExtension(
            this.id,
            (account as any).username,
            cosmiframe,
            chain.chainId,
            new Secp256k1PubKey({
              key: account.pubkey,
              chainId: chain.chainId,
            }),
            account.address,
            chain.rpc,
            chain.gasPrice,
          )
        );
      } catch (error: any) {
        console.error(error);
        throw new WalletError(error.message, error);
      }
    }
    return wallets;
  }

  protected registerAccountChangeHandlers() {

  }
}
