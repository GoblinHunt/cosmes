// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file terra/dyncomm/v1beta1/query.proto (package terra.dyncomm.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./dyncomm_pb.js";

/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from message terra.dyncomm.v1beta1.QueryParamsRequest
 */
export class QueryParamsRequest extends Message<QueryParamsRequest> {
  constructor(data?: PartialMessage<QueryParamsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "terra.dyncomm.v1beta1.QueryParamsRequest";
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
 * @generated from message terra.dyncomm.v1beta1.QueryParamsResponse
 */
export class QueryParamsResponse extends Message<QueryParamsResponse> {
  /**
   * params defines the parameters of the module.
   *
   * @generated from field: terra.dyncomm.v1beta1.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<QueryParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "terra.dyncomm.v1beta1.QueryParamsResponse";
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

/**
 * QueryRateRequest is the request type for the Query/Rate RPC method.
 *
 * @generated from message terra.dyncomm.v1beta1.QueryRateRequest
 */
export class QueryRateRequest extends Message<QueryRateRequest> {
  /**
   * validator_addr defines the validator address to query for.
   *
   * @generated from field: string validator_addr = 1;
   */
  validatorAddr = "";

  constructor(data?: PartialMessage<QueryRateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "terra.dyncomm.v1beta1.QueryRateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "validator_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryRateRequest {
    return new QueryRateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryRateRequest {
    return new QueryRateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryRateRequest {
    return new QueryRateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryRateRequest | PlainMessage<QueryRateRequest> | undefined, b: QueryRateRequest | PlainMessage<QueryRateRequest> | undefined): boolean {
    return proto3.util.equals(QueryRateRequest, a, b);
  }
}

/**
 * QueryRateResponse is the response type for the Query/Rate RPC method.
 *
 * @generated from message terra.dyncomm.v1beta1.QueryRateResponse
 */
export class QueryRateResponse extends Message<QueryRateResponse> {
  /**
   * @generated from field: string rate = 1;
   */
  rate = "";

  /**
   * @generated from field: string target = 2;
   */
  target = "";

  constructor(data?: PartialMessage<QueryRateResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "terra.dyncomm.v1beta1.QueryRateResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "rate", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "target", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryRateResponse {
    return new QueryRateResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryRateResponse {
    return new QueryRateResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryRateResponse {
    return new QueryRateResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryRateResponse | PlainMessage<QueryRateResponse> | undefined, b: QueryRateResponse | PlainMessage<QueryRateResponse> | undefined): boolean {
    return proto3.util.equals(QueryRateResponse, a, b);
  }
}

