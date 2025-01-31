import { PlainMessage } from "@bufbuild/protobuf";
import {
  Secp256k1PubKey,
  ToSignDocParams,
  ToStdSignDocParams,
  Tx
} from "cosmes/client";
import {
  CosmosBaseV1beta1Coin as Coin,
  CosmosTxV1beta1Fee as Fee
} from "cosmes/protobufs";

import { WalletName } from "../../constants/WalletName";
import { WalletType } from "../../constants/WalletType";
import {
  ConnectedWallet,
  SignArbitraryResponse,
  UnsignedTx,
} from "../ConnectedWallet";
import { WalletError } from "../WalletError";
import { Cosmiframe } from "@dao-dao/cosmiframe";

export class DaoDaoExtension extends ConnectedWallet {
  private readonly ext: Cosmiframe;

  constructor(
    walletName: WalletName,
    label: string | undefined,
    ext: Cosmiframe,
    chainId: string,
    pubKey: Secp256k1PubKey,
    address: string,
    rpc: string,
    gasPrice: PlainMessage<Coin>,
  ) {
    super(
      walletName,
      WalletType.EXTENSION,
      label,
      chainId,
      pubKey,
      address,
      rpc,
      gasPrice
    );
    this.ext = ext;
  }

  public async signArbitrary(data: string): Promise<SignArbitraryResponse> {
    throw new WalletError("DAO DAO does not support arbitrary signing", null);
  }

  protected async signAndBroadcastTx(
    { msgs, memo, timeoutHeight }: UnsignedTx,
    fee: Fee,
    accountNumber: bigint,
    sequence: bigint
  ): Promise<string> {
    const tx = new Tx({
      chainId: this.chainId,
      pubKey: this.pubKey,
      msgs: msgs,
    });

    const params: ToStdSignDocParams | ToSignDocParams = {
      accountNumber,
      sequence,
      fee,
      memo,
      timeoutHeight,
    };
    
    const signer = this.ext.getOfflineSigner(this.chainId);
    
    await WalletError.wrap(signer.signDirect(this.address, tx.toSignDoc(params)));

    throw new WalletError("DAO DAO returned an unexpected response", null);
  };
}
