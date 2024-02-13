import { PlainMessage } from "@bufbuild/protobuf";
import { utf8 } from "cosmes/codec";
import { CosmosAuthzV1beta1MsgRevoke as ProtoMsgRevoke } from "cosmes/protobufs";

import { DeepPrettify, Prettify } from "../../typeutils/prettify";
import { Adapter } from "./Adapter";

type Data<T> = Prettify<
  DeepPrettify<Omit<PlainMessage<ProtoMsgRevoke>, "msg">> & {
    msg: T;
  }
>;

export class MsgRevokeAuthorization<T> implements Adapter {
  private readonly data: Data<T>;

  constructor(data: Data<T>) {
    this.data = data;
  }

  public toProto() {
    return new ProtoMsgRevoke({
      ...this.data,      
    });
  }

  public toAmino() {
    return {
      type: "authz/MsgRevoke",
      value: {
        msg_type_url: this.data.msgTypeUrl,
        ...this.data,
      }
    };
  }
}
