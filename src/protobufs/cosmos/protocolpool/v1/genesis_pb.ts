// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file cosmos/protocolpool/v1/genesis.proto (package cosmos.protocolpool.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Budget, ContinuousFund } from "./types_pb.js";

/**
 * GenesisState defines the protocolpool module's genesis state.
 *
 * @generated from message cosmos.protocolpool.v1.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * ContinuousFund defines the continuous funds at genesis.
   *
   * @generated from field: repeated cosmos.protocolpool.v1.ContinuousFund continuous_fund = 1;
   */
  continuousFund: ContinuousFund[] = [];

  /**
   * Budget defines the budget proposals at genesis.
   *
   * @generated from field: repeated cosmos.protocolpool.v1.Budget budget = 2;
   */
  budget: Budget[] = [];

  /**
   * @generated from field: string to_distribute = 3;
   */
  toDistribute = "";

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.protocolpool.v1.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "continuous_fund", kind: "message", T: ContinuousFund, repeated: true },
    { no: 2, name: "budget", kind: "message", T: Budget, repeated: true },
    { no: 3, name: "to_distribute", kind: "scalar", T: 9 /* ScalarType.STRING */ },
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

