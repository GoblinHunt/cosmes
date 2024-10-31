// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file vsc/redeem/v1/redeem.proto (package vsc.redeem.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Params defines the set of VSG redeem parameters.
 *
 * @generated from message vsc.redeem.v1.Params
 */
export class Params extends Message<Params> {
  /**
   * @generated from field: bool send_enabled = 1;
   */
  sendEnabled = false;

  /**
   * @generated from field: bool receive_enabled = 2;
   */
  receiveEnabled = false;

  constructor(data?: PartialMessage<Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "vsc.redeem.v1.Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "send_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "receive_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params {
    return new Params().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params {
    return new Params().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params {
    return new Params().fromJsonString(jsonString, options);
  }

  static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean {
    return proto3.util.equals(Params, a, b);
  }
}
