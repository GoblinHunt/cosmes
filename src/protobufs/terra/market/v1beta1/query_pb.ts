// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file terra/market/v1beta1/query.proto (package terra.market.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { Params } from "./market_pb.js";

/**
 * QuerySwapRequest is the request type for the Query/Swap RPC method.
 *
 * @generated from message terra.market.v1beta1.QuerySwapRequest
 */
export class QuerySwapRequest extends Message<QuerySwapRequest> {
  /**
   * offer_coin defines the coin being offered (i.e. 1000000uluna)
   *
   * @generated from field: string offer_coin = 1;
   */
  offerCoin = "";

  /**
   * ask_denom defines the denom of the coin to swap to
   *
   * @generated from field: string ask_denom = 2;
   */
  askDenom = "";

  constructor(data?: PartialMessage<QuerySwapRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "terra.market.v1beta1.QuerySwapRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "offer_coin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "ask_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySwapRequest {
    return new QuerySwapRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySwapRequest {
    return new QuerySwapRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySwapRequest {
    return new QuerySwapRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QuerySwapRequest | PlainMessage<QuerySwapRequest> | undefined, b: QuerySwapRequest | PlainMessage<QuerySwapRequest> | undefined): boolean {
    return proto3.util.equals(QuerySwapRequest, a, b);
  }
}

/**
 * QuerySwapResponse is the response type for the Query/Swap RPC method.
 *
 * @generated from message terra.market.v1beta1.QuerySwapResponse
 */
export class QuerySwapResponse extends Message<QuerySwapResponse> {
  /**
   * return_coin defines the coin returned as a result of the swap simulation.
   *
   * @generated from field: cosmos.base.v1beta1.Coin return_coin = 1;
   */
  returnCoin?: Coin;

  constructor(data?: PartialMessage<QuerySwapResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "terra.market.v1beta1.QuerySwapResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "return_coin", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySwapResponse {
    return new QuerySwapResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySwapResponse {
    return new QuerySwapResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySwapResponse {
    return new QuerySwapResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QuerySwapResponse | PlainMessage<QuerySwapResponse> | undefined, b: QuerySwapResponse | PlainMessage<QuerySwapResponse> | undefined): boolean {
    return proto3.util.equals(QuerySwapResponse, a, b);
  }
}

/**
 * QueryTerraPoolDeltaRequest is the request type for the Query/TerraPoolDelta RPC method.
 *
 * @generated from message terra.market.v1beta1.QueryTerraPoolDeltaRequest
 */
export class QueryTerraPoolDeltaRequest extends Message<QueryTerraPoolDeltaRequest> {
  constructor(data?: PartialMessage<QueryTerraPoolDeltaRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "terra.market.v1beta1.QueryTerraPoolDeltaRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTerraPoolDeltaRequest {
    return new QueryTerraPoolDeltaRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTerraPoolDeltaRequest {
    return new QueryTerraPoolDeltaRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTerraPoolDeltaRequest {
    return new QueryTerraPoolDeltaRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryTerraPoolDeltaRequest | PlainMessage<QueryTerraPoolDeltaRequest> | undefined, b: QueryTerraPoolDeltaRequest | PlainMessage<QueryTerraPoolDeltaRequest> | undefined): boolean {
    return proto3.util.equals(QueryTerraPoolDeltaRequest, a, b);
  }
}

/**
 * QueryTerraPoolDeltaResponse is the response type for the Query/TerraPoolDelta RPC method.
 *
 * @generated from message terra.market.v1beta1.QueryTerraPoolDeltaResponse
 */
export class QueryTerraPoolDeltaResponse extends Message<QueryTerraPoolDeltaResponse> {
  /**
   * terra_pool_delta defines the gap between the TerraPool and the TerraBasePool
   *
   * @generated from field: bytes terra_pool_delta = 1;
   */
  terraPoolDelta = new Uint8Array(0);

  constructor(data?: PartialMessage<QueryTerraPoolDeltaResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "terra.market.v1beta1.QueryTerraPoolDeltaResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "terra_pool_delta", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTerraPoolDeltaResponse {
    return new QueryTerraPoolDeltaResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTerraPoolDeltaResponse {
    return new QueryTerraPoolDeltaResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTerraPoolDeltaResponse {
    return new QueryTerraPoolDeltaResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryTerraPoolDeltaResponse | PlainMessage<QueryTerraPoolDeltaResponse> | undefined, b: QueryTerraPoolDeltaResponse | PlainMessage<QueryTerraPoolDeltaResponse> | undefined): boolean {
    return proto3.util.equals(QueryTerraPoolDeltaResponse, a, b);
  }
}

/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from message terra.market.v1beta1.QueryParamsRequest
 */
export class QueryParamsRequest extends Message<QueryParamsRequest> {
  constructor(data?: PartialMessage<QueryParamsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "terra.market.v1beta1.QueryParamsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean {
    return proto3.util.equals(QueryParamsRequest, a, b);
  }
}

/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 *
 * @generated from message terra.market.v1beta1.QueryParamsResponse
 */
export class QueryParamsResponse extends Message<QueryParamsResponse> {
  /**
   * params defines the parameters of the module.
   *
   * @generated from field: terra.market.v1beta1.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<QueryParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "terra.market.v1beta1.QueryParamsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean {
    return proto3.util.equals(QueryParamsResponse, a, b);
  }
}

