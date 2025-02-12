import { PlainMessage } from "@bufbuild/protobuf";
import { base64, utf8 } from "cosmes/codec";
import { CosmwasmWasmV1MsgExecuteContract as ProtoMsgExecuteContract } from "cosmes/protobufs";

import { DeepPrettify, Prettify } from "../../typeutils/prettify";
import { Adapter } from "./Adapter";
import { removeNull } from "../utils/null";

type Data<T> = Prettify<
  DeepPrettify<Omit<PlainMessage<ProtoMsgExecuteContract>, "msg">> & {
    msg: T;
  }
>;

export class MsgExecuteContract<T> implements Adapter {
  private readonly data: Data<T>;
  private readonly legacy: boolean;

  constructor(data: Data<T>, legacy = false) {
    this.data = data;
    this.legacy = legacy;
  }

  public toProto() {
    return new ProtoMsgExecuteContract({
      ...this.data,
      msg: utf8.decode(JSON.stringify(this.data.msg)),
    });
  }

  public toAmino() {
    const { sender, contract, funds, msg } = this.data;
    return {
      type: "wasm/MsgExecuteContract",
      value: {
        sender,
        contract,
        msg: removeNull(msg),
        funds: funds ? funds.map((fund) => ({
          denom: fund.denom,
          amount: fund.amount.toString(),
        })) : [],
      },
    };
  }
}
