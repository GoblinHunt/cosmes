// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file terra/dyncomm/v1beta1/dyncomm.proto (package terra.dyncomm.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Params defines the parameters for the dyncomm module.
 *
 * @generated from message terra.dyncomm.v1beta1.Params
 */
export class Params extends Message<Params> {
  /**
   * @generated from field: string max_zero = 1;
   */
  maxZero = "";

  /**
   * @generated from field: string slope_base = 2;
   */
  slopeBase = "";

  /**
   * @generated from field: string slope_vp_impact = 3;
   */
  slopeVpImpact = "";

  /**
   * @generated from field: string cap = 4;
   */
  cap = "";

  constructor(data?: PartialMessage<Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "terra.dyncomm.v1beta1.Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "max_zero", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "slope_base", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "slope_vp_impact", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "cap", kind: "scalar", T: 9 /* ScalarType.STRING */ },
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
