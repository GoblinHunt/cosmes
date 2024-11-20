import { PlainMessage } from "@bufbuild/protobuf";
import { CosmosStakingV1beta1MsgCreateValidator as ProtoMsgCreateValidator } from "cosmes/protobufs";

import { DeepPrettify } from "../../typeutils/prettify";
import { Adapter } from "./Adapter";

type Data = DeepPrettify<PlainMessage<ProtoMsgCreateValidator>>;

export class MsgCreateValidator implements Adapter {
  private readonly data: Data;

  constructor(data: Data) {
    this.data = data;
  }

  public toProto() {
    return new ProtoMsgCreateValidator({
      ...this.data,
      commission: this.data.commission ? this.data.commission : undefined,
      delegatorAddress: this.data.delegatorAddress ? this.data.delegatorAddress : undefined,
      description: this.data.description ? this.data.description : undefined,
      minSelfDelegation: this.data.minSelfDelegation ? this.data.minSelfDelegation : undefined,
      pubkey: this.data.pubkey ? this.data.pubkey : undefined,
      value: this.data.value ? this.data.value : undefined,
    });
  }

  public toAmino() {
    return {
      type: "staking/MsgCreateValidator",
      value: {
        validator_address: this.data.validatorAddress,
        commission: {
          rate: this.data.commission?.rate ? this.data.commission.rate : undefined,
          max_rate: this.data.commission?.maxRate ? this.data.commission.maxRate : undefined,
          max_change_rate: this.data.commission?.maxChangeRate ? this.data.commission.maxChangeRate : undefined,
        },
        delegator_address: this.data.delegatorAddress,
        description: {
          moniker: this.data.description?.moniker ?? '',
          identity: this.data.description?.identity ?? '',
          website: this.data.description?.website ?? '',
          security_contact: this.data.description?.securityContact ?? '',
          details: this.data.description?.details ?? '',
        },
        min_self_delegation: this.data.minSelfDelegation ? this.data.minSelfDelegation.toString() : '',
        pubkey: {
          type: this.data.pubkey?.typeUrl ?? '',
          value: this.data.pubkey?.value ?? '',
        },
      },
    };
  }
}