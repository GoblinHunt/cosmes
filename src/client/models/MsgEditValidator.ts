import { PlainMessage } from "@bufbuild/protobuf";
import { CosmosStakingV1beta1MsgEditValidator as ProtoMsgEditValidator } from "cosmes/protobufs";

import { DeepPrettify } from "../../typeutils/prettify";
import { Adapter } from "./Adapter";

type Data = DeepPrettify<PlainMessage<ProtoMsgEditValidator>>;

export class MsgEditValidator implements Adapter {
  private readonly data: Data;

  constructor(data: Data) {
    this.data = data;
  }

  public toProto() {
    return new ProtoMsgEditValidator(this.data);
  }

  public toAmino() {
    return {
      type: "cosmos-sdk/MsgEditValidator",
      value: {
        validator_address: this.data.validatorAddress,
        commission_rate: this.data.commissionRate ? this.data.commissionRate.toString() : undefined,
        min_self_delegation: this.data.minSelfDelegation ? this.data.minSelfDelegation.toString() : undefined,
        description: {
          moniker: this.data.description?.moniker,
          identity: this.data.description?.identity,
          website: this.data.description?.website,
          security_contact: this.data.description?.securityContact,
          details: this.data.description?.details,
        },
      },
    };
  }
}