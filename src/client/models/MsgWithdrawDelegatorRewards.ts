import { PlainMessage } from "@bufbuild/protobuf";
import { CosmosDistributionV1beta1MsgWithdrawDelegatorReward as ProtoMsgWithdrawDelegatorRewards } from "cosmes/protobufs";

import { DeepPrettify } from "../../typeutils/prettify";
import { Adapter } from "./Adapter";

type Data = DeepPrettify<PlainMessage<ProtoMsgWithdrawDelegatorRewards>>;

export class MsgWithdrawDelegatorRewards implements Adapter {
  private readonly data: Data;

  constructor(data: Data) {
    this.data = data;
  }

  public toProto() {
    return new ProtoMsgWithdrawDelegatorRewards(this.data);
  }

  public toAmino() {
    return {
      type: "cosmos-sdk/MsgWithdrawDelegatorRewards",
      value: {
        delegator_address: this.data.delegatorAddress,
        validator_address: this.data.validatorAddress,
        },
    };
  }
}