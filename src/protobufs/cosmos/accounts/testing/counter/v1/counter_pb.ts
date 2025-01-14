// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file cosmos/accounts/testing/counter/v1/counter.proto (package cosmos.accounts.testing.counter.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * MsgInit defines a message which initializes the counter with a given amount.
 *
 * @generated from message cosmos.accounts.testing.counter.v1.MsgInit
 */
export class MsgInit extends Message<MsgInit> {
  /**
   * initial_value is the initial amount to set the counter to.
   *
   * @generated from field: uint64 initial_value = 1;
   */
  initialValue = protoInt64.zero;

  constructor(data?: PartialMessage<MsgInit>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.accounts.testing.counter.v1.MsgInit";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "initial_value", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgInit {
    return new MsgInit().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgInit {
    return new MsgInit().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgInit {
    return new MsgInit().fromJsonString(jsonString, options);
  }

  static equals(a: MsgInit | PlainMessage<MsgInit> | undefined, b: MsgInit | PlainMessage<MsgInit> | undefined): boolean {
    return proto3.util.equals(MsgInit, a, b);
  }
}

/**
 * MsgInitResponse defines the MsgInit response type.
 *
 * @generated from message cosmos.accounts.testing.counter.v1.MsgInitResponse
 */
export class MsgInitResponse extends Message<MsgInitResponse> {
  constructor(data?: PartialMessage<MsgInitResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.accounts.testing.counter.v1.MsgInitResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgInitResponse {
    return new MsgInitResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgInitResponse {
    return new MsgInitResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgInitResponse {
    return new MsgInitResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgInitResponse | PlainMessage<MsgInitResponse> | undefined, b: MsgInitResponse | PlainMessage<MsgInitResponse> | undefined): boolean {
    return proto3.util.equals(MsgInitResponse, a, b);
  }
}

/**
 * MsgIncreaseCounter defines a message which increases the counter by a given amount.
 *
 * @generated from message cosmos.accounts.testing.counter.v1.MsgIncreaseCounter
 */
export class MsgIncreaseCounter extends Message<MsgIncreaseCounter> {
  /**
   * amount is the amount to increase the counter by.
   *
   * @generated from field: uint64 amount = 1;
   */
  amount = protoInt64.zero;

  constructor(data?: PartialMessage<MsgIncreaseCounter>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.accounts.testing.counter.v1.MsgIncreaseCounter";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "amount", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgIncreaseCounter {
    return new MsgIncreaseCounter().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgIncreaseCounter {
    return new MsgIncreaseCounter().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgIncreaseCounter {
    return new MsgIncreaseCounter().fromJsonString(jsonString, options);
  }

  static equals(a: MsgIncreaseCounter | PlainMessage<MsgIncreaseCounter> | undefined, b: MsgIncreaseCounter | PlainMessage<MsgIncreaseCounter> | undefined): boolean {
    return proto3.util.equals(MsgIncreaseCounter, a, b);
  }
}

/**
 * MsgIncreaseCounterResponse defines the MsgIncreaseCounter response type.
 * Returns the new counter value.
 *
 * @generated from message cosmos.accounts.testing.counter.v1.MsgIncreaseCounterResponse
 */
export class MsgIncreaseCounterResponse extends Message<MsgIncreaseCounterResponse> {
  /**
   * new_amount defines the new counter value after the increase.
   *
   * @generated from field: uint64 new_amount = 1;
   */
  newAmount = protoInt64.zero;

  constructor(data?: PartialMessage<MsgIncreaseCounterResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.accounts.testing.counter.v1.MsgIncreaseCounterResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "new_amount", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgIncreaseCounterResponse {
    return new MsgIncreaseCounterResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgIncreaseCounterResponse {
    return new MsgIncreaseCounterResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgIncreaseCounterResponse {
    return new MsgIncreaseCounterResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgIncreaseCounterResponse | PlainMessage<MsgIncreaseCounterResponse> | undefined, b: MsgIncreaseCounterResponse | PlainMessage<MsgIncreaseCounterResponse> | undefined): boolean {
    return proto3.util.equals(MsgIncreaseCounterResponse, a, b);
  }
}

/**
 * MsgTestDependencies is used to test the dependencies.
 *
 * @generated from message cosmos.accounts.testing.counter.v1.MsgTestDependencies
 */
export class MsgTestDependencies extends Message<MsgTestDependencies> {
  constructor(data?: PartialMessage<MsgTestDependencies>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.accounts.testing.counter.v1.MsgTestDependencies";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgTestDependencies {
    return new MsgTestDependencies().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgTestDependencies {
    return new MsgTestDependencies().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgTestDependencies {
    return new MsgTestDependencies().fromJsonString(jsonString, options);
  }

  static equals(a: MsgTestDependencies | PlainMessage<MsgTestDependencies> | undefined, b: MsgTestDependencies | PlainMessage<MsgTestDependencies> | undefined): boolean {
    return proto3.util.equals(MsgTestDependencies, a, b);
  }
}

/**
 * MsgTestDependenciesResponse is used to test the dependencies.
 *
 * @generated from message cosmos.accounts.testing.counter.v1.MsgTestDependenciesResponse
 */
export class MsgTestDependenciesResponse extends Message<MsgTestDependenciesResponse> {
  /**
   * chain_id is used to test that the header service correctly works.
   *
   * @generated from field: string chain_id = 1;
   */
  chainId = "";

  /**
   * address is used to test address codec.
   *
   * @generated from field: string address = 2;
   */
  address = "";

  /**
   * before_gas is used to test the gas meter reporting.
   *
   * @generated from field: uint64 before_gas = 3;
   */
  beforeGas = protoInt64.zero;

  /**
   * after_gas is used to test gas meter increasing.
   *
   * @generated from field: uint64 after_gas = 4;
   */
  afterGas = protoInt64.zero;

  constructor(data?: PartialMessage<MsgTestDependenciesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.accounts.testing.counter.v1.MsgTestDependenciesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "chain_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "before_gas", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "after_gas", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgTestDependenciesResponse {
    return new MsgTestDependenciesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgTestDependenciesResponse {
    return new MsgTestDependenciesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgTestDependenciesResponse {
    return new MsgTestDependenciesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgTestDependenciesResponse | PlainMessage<MsgTestDependenciesResponse> | undefined, b: MsgTestDependenciesResponse | PlainMessage<MsgTestDependenciesResponse> | undefined): boolean {
    return proto3.util.equals(MsgTestDependenciesResponse, a, b);
  }
}

/**
 * QueryCounterRequest is used to query the counter value.
 *
 * @generated from message cosmos.accounts.testing.counter.v1.QueryCounterRequest
 */
export class QueryCounterRequest extends Message<QueryCounterRequest> {
  constructor(data?: PartialMessage<QueryCounterRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.accounts.testing.counter.v1.QueryCounterRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCounterRequest {
    return new QueryCounterRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCounterRequest {
    return new QueryCounterRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCounterRequest {
    return new QueryCounterRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryCounterRequest | PlainMessage<QueryCounterRequest> | undefined, b: QueryCounterRequest | PlainMessage<QueryCounterRequest> | undefined): boolean {
    return proto3.util.equals(QueryCounterRequest, a, b);
  }
}

/**
 * QueryCounterResponse returns the counter value.
 *
 * @generated from message cosmos.accounts.testing.counter.v1.QueryCounterResponse
 */
export class QueryCounterResponse extends Message<QueryCounterResponse> {
  /**
   * value defines the value of the counter.
   *
   * @generated from field: uint64 value = 1;
   */
  value = protoInt64.zero;

  constructor(data?: PartialMessage<QueryCounterResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.accounts.testing.counter.v1.QueryCounterResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCounterResponse {
    return new QueryCounterResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCounterResponse {
    return new QueryCounterResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCounterResponse {
    return new QueryCounterResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryCounterResponse | PlainMessage<QueryCounterResponse> | undefined, b: QueryCounterResponse | PlainMessage<QueryCounterResponse> | undefined): boolean {
    return proto3.util.equals(QueryCounterResponse, a, b);
  }
}

