// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file vsc/feedistribute/v1/feedistribute.proto (package vsc.feedistribute.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * FeeDistributeShare - struct to store fee shares
 *
 * @generated from message vsc.feedistribute.v1.FeeDistributeShare
 */
export class FeeDistributeShare extends Message<FeeDistributeShare> {
  /**
   * @generated from field: string address = 1;
   */
  address = "";

  /**
   * @generated from field: string share = 2;
   */
  share = "";

  constructor(data?: PartialMessage<FeeDistributeShare>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "vsc.feedistribute.v1.FeeDistributeShare";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "share", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeeDistributeShare {
    return new FeeDistributeShare().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeeDistributeShare {
    return new FeeDistributeShare().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeeDistributeShare {
    return new FeeDistributeShare().fromJsonString(jsonString, options);
  }

  static equals(a: FeeDistributeShare | PlainMessage<FeeDistributeShare> | undefined, b: FeeDistributeShare | PlainMessage<FeeDistributeShare> | undefined): boolean {
    return proto3.util.equals(FeeDistributeShare, a, b);
  }
}

/**
 * RewardShare - struct to store reward share
 *
 * @generated from message vsc.feedistribute.v1.RewardShare
 */
export class RewardShare extends Message<RewardShare> {
  /**
   * @generated from field: string reward_share = 1;
   */
  rewardShare = "";

  constructor(data?: PartialMessage<RewardShare>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "vsc.feedistribute.v1.RewardShare";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "reward_share", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RewardShare {
    return new RewardShare().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RewardShare {
    return new RewardShare().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RewardShare {
    return new RewardShare().fromJsonString(jsonString, options);
  }

  static equals(a: RewardShare | PlainMessage<RewardShare> | undefined, b: RewardShare | PlainMessage<RewardShare> | undefined): boolean {
    return proto3.util.equals(RewardShare, a, b);
  }
}

/**
 * BurnShare - struct to store burn share
 *
 * @generated from message vsc.feedistribute.v1.BurnShare
 */
export class BurnShare extends Message<BurnShare> {
  /**
   * @generated from field: string burn_share = 1;
   */
  burnShare = "";

  constructor(data?: PartialMessage<BurnShare>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "vsc.feedistribute.v1.BurnShare";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "burn_share", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BurnShare {
    return new BurnShare().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BurnShare {
    return new BurnShare().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BurnShare {
    return new BurnShare().fromJsonString(jsonString, options);
  }

  static equals(a: BurnShare | PlainMessage<BurnShare> | undefined, b: BurnShare | PlainMessage<BurnShare> | undefined): boolean {
    return proto3.util.equals(BurnShare, a, b);
  }
}

