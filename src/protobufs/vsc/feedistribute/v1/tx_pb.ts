// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file vsc/feedistribute/v1/tx.proto (package vsc.feedistribute.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * MsgAggregateExchangeRatePrevote represents a message to submit
 * aggregate exchange rate prevote.
 *
 * @generated from message vsc.feedistribute.v1.MsgFeeDistributeShares
 */
export class MsgFeeDistributeShares extends Message<MsgFeeDistributeShares> {
  /**
   * @generated from field: string shares = 1;
   */
  shares = "";

  /**
   * @generated from field: string reward_share = 2;
   */
  rewardShare = "";

  /**
   * @generated from field: string burn_share = 3;
   */
  burnShare = "";

  /**
   * @generated from field: string sender = 4;
   */
  sender = "";

  constructor(data?: PartialMessage<MsgFeeDistributeShares>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "vsc.feedistribute.v1.MsgFeeDistributeShares";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "shares", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "reward_share", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "burn_share", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgFeeDistributeShares {
    return new MsgFeeDistributeShares().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgFeeDistributeShares {
    return new MsgFeeDistributeShares().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgFeeDistributeShares {
    return new MsgFeeDistributeShares().fromJsonString(jsonString, options);
  }

  static equals(a: MsgFeeDistributeShares | PlainMessage<MsgFeeDistributeShares> | undefined, b: MsgFeeDistributeShares | PlainMessage<MsgFeeDistributeShares> | undefined): boolean {
    return proto3.util.equals(MsgFeeDistributeShares, a, b);
  }
}

/**
 * MsgAggregateExchangeRatePrevoteResponse defines the
 * Msg/AggregateExchangeRatePrevote response type.
 *
 * @generated from message vsc.feedistribute.v1.MsgFeeDistributeSharesResponse
 */
export class MsgFeeDistributeSharesResponse extends Message<MsgFeeDistributeSharesResponse> {
  constructor(data?: PartialMessage<MsgFeeDistributeSharesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "vsc.feedistribute.v1.MsgFeeDistributeSharesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgFeeDistributeSharesResponse {
    return new MsgFeeDistributeSharesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgFeeDistributeSharesResponse {
    return new MsgFeeDistributeSharesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgFeeDistributeSharesResponse {
    return new MsgFeeDistributeSharesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgFeeDistributeSharesResponse | PlainMessage<MsgFeeDistributeSharesResponse> | undefined, b: MsgFeeDistributeSharesResponse | PlainMessage<MsgFeeDistributeSharesResponse> | undefined): boolean {
    return proto3.util.equals(MsgFeeDistributeSharesResponse, a, b);
  }
}

