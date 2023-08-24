// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file capability/v1/genesis.proto (package capability.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { CapabilityOwners } from "./capability_pb.js";

/**
 * GenesisOwners defines the capability owners with their corresponding index.
 *
 * @generated from message capability.v1.GenesisOwners
 */
export class GenesisOwners extends Message<GenesisOwners> {
  /**
   * index is the index of the capability owner.
   *
   * @generated from field: uint64 index = 1;
   */
  index = protoInt64.zero;

  /**
   * index_owners are the owners at the given index.
   *
   * @generated from field: capability.v1.CapabilityOwners index_owners = 2;
   */
  indexOwners?: CapabilityOwners;

  constructor(data?: PartialMessage<GenesisOwners>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "capability.v1.GenesisOwners";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "index", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "index_owners", kind: "message", T: CapabilityOwners },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisOwners {
    return new GenesisOwners().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisOwners {
    return new GenesisOwners().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisOwners {
    return new GenesisOwners().fromJsonString(jsonString, options);
  }

  static equals(a: GenesisOwners | PlainMessage<GenesisOwners> | undefined, b: GenesisOwners | PlainMessage<GenesisOwners> | undefined): boolean {
    return proto3.util.equals(GenesisOwners, a, b);
  }
}

/**
 * GenesisState defines the capability module's genesis state.
 *
 * @generated from message capability.v1.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * index is the capability global index.
   *
   * @generated from field: uint64 index = 1;
   */
  index = protoInt64.zero;

  /**
   * owners represents a map from index to owners of the capability index
   * index key is string to allow amino marshalling.
   *
   * @generated from field: repeated capability.v1.GenesisOwners owners = 2;
   */
  owners: GenesisOwners[] = [];

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "capability.v1.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "index", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "owners", kind: "message", T: GenesisOwners, repeated: true },
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
