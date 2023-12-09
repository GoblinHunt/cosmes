// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file injective/insurance/v1beta1/tx.proto (package injective.insurance.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { OracleType } from "../../oracle/v1beta1/oracle_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { Params } from "./insurance_pb.js";

/**
 * MsgCreateInsuranceFund a message to create an insurance fund for a derivative
 * market.
 *
 * @generated from message injective.insurance.v1beta1.MsgCreateInsuranceFund
 */
export class MsgCreateInsuranceFund extends Message<MsgCreateInsuranceFund> {
  /**
   * Creator of the insurance fund.
   *
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * Ticker for the derivative market.
   *
   * @generated from field: string ticker = 2;
   */
  ticker = "";

  /**
   * Coin denom to use for the market quote denom
   *
   * @generated from field: string quote_denom = 3;
   */
  quoteDenom = "";

  /**
   * Oracle base currency of the derivative market OR the oracle symbol for the
   * binary options market.
   *
   * @generated from field: string oracle_base = 4;
   */
  oracleBase = "";

  /**
   * Oracle quote currency of the derivative market OR the oracle provider for
   * the binary options market.
   *
   * @generated from field: string oracle_quote = 5;
   */
  oracleQuote = "";

  /**
   * Oracle type of the binary options or derivative market
   *
   * @generated from field: injective.oracle.v1beta1.OracleType oracle_type = 6;
   */
  oracleType = OracleType.Unspecified;

  /**
   * Expiration time of the derivative market. Should be -1 for perpetual or -2
   * for binary options markets.
   *
   * @generated from field: int64 expiry = 7;
   */
  expiry = protoInt64.zero;

  /**
   * Initial deposit of the insurance fund
   *
   * @generated from field: cosmos.base.v1beta1.Coin initial_deposit = 8;
   */
  initialDeposit?: Coin;

  constructor(data?: PartialMessage<MsgCreateInsuranceFund>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.insurance.v1beta1.MsgCreateInsuranceFund";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "ticker", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "quote_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "oracle_base", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "oracle_quote", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "oracle_type", kind: "enum", T: proto3.getEnumType(OracleType) },
    { no: 7, name: "expiry", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 8, name: "initial_deposit", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateInsuranceFund {
    return new MsgCreateInsuranceFund().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateInsuranceFund {
    return new MsgCreateInsuranceFund().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateInsuranceFund {
    return new MsgCreateInsuranceFund().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCreateInsuranceFund | PlainMessage<MsgCreateInsuranceFund> | undefined, b: MsgCreateInsuranceFund | PlainMessage<MsgCreateInsuranceFund> | undefined): boolean {
    return proto3.util.equals(MsgCreateInsuranceFund, a, b);
  }
}

/**
 * @generated from message injective.insurance.v1beta1.MsgCreateInsuranceFundResponse
 */
export class MsgCreateInsuranceFundResponse extends Message<MsgCreateInsuranceFundResponse> {
  constructor(data?: PartialMessage<MsgCreateInsuranceFundResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.insurance.v1beta1.MsgCreateInsuranceFundResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateInsuranceFundResponse {
    return new MsgCreateInsuranceFundResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateInsuranceFundResponse {
    return new MsgCreateInsuranceFundResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateInsuranceFundResponse {
    return new MsgCreateInsuranceFundResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCreateInsuranceFundResponse | PlainMessage<MsgCreateInsuranceFundResponse> | undefined, b: MsgCreateInsuranceFundResponse | PlainMessage<MsgCreateInsuranceFundResponse> | undefined): boolean {
    return proto3.util.equals(MsgCreateInsuranceFundResponse, a, b);
  }
}

/**
 * MsgUnderwrite defines a message for depositing coins to underwrite an
 * insurance fund
 *
 * @generated from message injective.insurance.v1beta1.MsgUnderwrite
 */
export class MsgUnderwrite extends Message<MsgUnderwrite> {
  /**
   * Address of the underwriter.
   *
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * MarketID of the insurance fund.
   *
   * @generated from field: string market_id = 2;
   */
  marketId = "";

  /**
   * Amount of quote_denom to underwrite the insurance fund.
   *
   * @generated from field: cosmos.base.v1beta1.Coin deposit = 3;
   */
  deposit?: Coin;

  constructor(data?: PartialMessage<MsgUnderwrite>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.insurance.v1beta1.MsgUnderwrite";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "market_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "deposit", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUnderwrite {
    return new MsgUnderwrite().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUnderwrite {
    return new MsgUnderwrite().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUnderwrite {
    return new MsgUnderwrite().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUnderwrite | PlainMessage<MsgUnderwrite> | undefined, b: MsgUnderwrite | PlainMessage<MsgUnderwrite> | undefined): boolean {
    return proto3.util.equals(MsgUnderwrite, a, b);
  }
}

/**
 * @generated from message injective.insurance.v1beta1.MsgUnderwriteResponse
 */
export class MsgUnderwriteResponse extends Message<MsgUnderwriteResponse> {
  constructor(data?: PartialMessage<MsgUnderwriteResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.insurance.v1beta1.MsgUnderwriteResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUnderwriteResponse {
    return new MsgUnderwriteResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUnderwriteResponse {
    return new MsgUnderwriteResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUnderwriteResponse {
    return new MsgUnderwriteResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUnderwriteResponse | PlainMessage<MsgUnderwriteResponse> | undefined, b: MsgUnderwriteResponse | PlainMessage<MsgUnderwriteResponse> | undefined): boolean {
    return proto3.util.equals(MsgUnderwriteResponse, a, b);
  }
}

/**
 * MsgRequestRedemption defines a message for requesting a redemption of the
 * sender's insurance fund tokens
 *
 * @generated from message injective.insurance.v1beta1.MsgRequestRedemption
 */
export class MsgRequestRedemption extends Message<MsgRequestRedemption> {
  /**
   * Address of the underwriter requesting a redemption.
   *
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * MarketID of the insurance fund.
   *
   * @generated from field: string market_id = 2;
   */
  marketId = "";

  /**
   * Insurance fund share token amount to be redeemed.
   *
   * @generated from field: cosmos.base.v1beta1.Coin amount = 3;
   */
  amount?: Coin;

  constructor(data?: PartialMessage<MsgRequestRedemption>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.insurance.v1beta1.MsgRequestRedemption";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "market_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRequestRedemption {
    return new MsgRequestRedemption().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRequestRedemption {
    return new MsgRequestRedemption().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRequestRedemption {
    return new MsgRequestRedemption().fromJsonString(jsonString, options);
  }

  static equals(a: MsgRequestRedemption | PlainMessage<MsgRequestRedemption> | undefined, b: MsgRequestRedemption | PlainMessage<MsgRequestRedemption> | undefined): boolean {
    return proto3.util.equals(MsgRequestRedemption, a, b);
  }
}

/**
 * @generated from message injective.insurance.v1beta1.MsgRequestRedemptionResponse
 */
export class MsgRequestRedemptionResponse extends Message<MsgRequestRedemptionResponse> {
  constructor(data?: PartialMessage<MsgRequestRedemptionResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.insurance.v1beta1.MsgRequestRedemptionResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRequestRedemptionResponse {
    return new MsgRequestRedemptionResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRequestRedemptionResponse {
    return new MsgRequestRedemptionResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRequestRedemptionResponse {
    return new MsgRequestRedemptionResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgRequestRedemptionResponse | PlainMessage<MsgRequestRedemptionResponse> | undefined, b: MsgRequestRedemptionResponse | PlainMessage<MsgRequestRedemptionResponse> | undefined): boolean {
    return proto3.util.equals(MsgRequestRedemptionResponse, a, b);
  }
}

/**
 * @generated from message injective.insurance.v1beta1.MsgUpdateParams
 */
export class MsgUpdateParams extends Message<MsgUpdateParams> {
  /**
   * authority is the address of the governance account.
   *
   * @generated from field: string authority = 1;
   */
  authority = "";

  /**
   * params defines the insurance parameters to update.
   *
   * NOTE: All parameters must be supplied.
   *
   * @generated from field: injective.insurance.v1beta1.Params params = 2;
   */
  params?: Params;

  constructor(data?: PartialMessage<MsgUpdateParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.insurance.v1beta1.MsgUpdateParams";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "params", kind: "message", T: Params },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParams {
    return new MsgUpdateParams().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParams {
    return new MsgUpdateParams().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParams {
    return new MsgUpdateParams().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined, b: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined): boolean {
    return proto3.util.equals(MsgUpdateParams, a, b);
  }
}

/**
 * @generated from message injective.insurance.v1beta1.MsgUpdateParamsResponse
 */
export class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
  constructor(data?: PartialMessage<MsgUpdateParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.insurance.v1beta1.MsgUpdateParamsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParamsResponse {
    return new MsgUpdateParamsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse {
    return new MsgUpdateParamsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse {
    return new MsgUpdateParamsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined, b: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined): boolean {
    return proto3.util.equals(MsgUpdateParamsResponse, a, b);
  }
}
