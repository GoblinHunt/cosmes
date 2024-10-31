// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file vsc/feedistribute/v1/genesis.proto (package vsc.feedistribute.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FeeDistributeShare } from "./feedistribute_pb.js";

/**
 * GenesisState defines the feedistribute module's genesis state.
 *
 * @generated from message vsc.feedistribute.v1.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * @generated from field: repeated vsc.feedistribute.v1.FeeDistributeShare shares = 1;
   */
  shares: FeeDistributeShare[] = [];

  /**
   * @generated from field: string reward_share = 2;
   */
  rewardShare = "";

  /**
   * @generated from field: string burn_share = 3;
   */
  burnShare = "";

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "vsc.feedistribute.v1.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "shares", kind: "message", T: FeeDistributeShare, repeated: true },
    { no: 2, name: "reward_share", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "burn_share", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState {
    return new GenesisState().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJsonString(jsonString, options);
  }

  static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean {
    return proto3.util.equals(GenesisState, a, b);
  }
}
