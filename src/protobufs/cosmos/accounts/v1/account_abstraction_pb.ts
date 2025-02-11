// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file cosmos/accounts/v1/account_abstraction.proto (package cosmos.accounts.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * UserOperation defines the type used to define a state transition that
 * an account wants to make.
 *
 * @generated from message cosmos.accounts.v1.UserOperation
 */
export class UserOperation extends Message<UserOperation> {
  /**
   * sender defines the account that is sending the UserOperation.
   *
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * authentication_method defines the authentication strategy the account wants to use.
   * since accounts can have multiple authentication methods, this field is used to
   * instruct the account on what auth method to use.
   *
   * @generated from field: string authentication_method = 2;
   */
  authenticationMethod = "";

  /**
   * authentication_data defines the authentication data associated with the authentication method.
   * It is the account implementer duty to assess that the UserOperation is properly signed.
   *
   * @generated from field: google.protobuf.Any authentication_data = 3;
   */
  authenticationData?: Any;

  /**
   * authentication_gas_limit expresses the gas limit to be used for the authentication part of the
   * UserOperation.
   *
   * @generated from field: uint64 authentication_gas_limit = 4;
   */
  authenticationGasLimit = protoInt64.zero;

  /**
   * bundler_payment_messages expresses a list of messages that the account
   * executes to pay the bundler for submitting the UserOperation.
   * It can be empty if the bundler does not need any form of payment,
   * the handshake for submitting the UserOperation might have happened off-chain.
   * Bundlers and accounts are free to use any form of payment, in fact the payment can
   * either be empty or be expressed as:
   * - NFT payment
   * - IBC Token payment.
   * - Payment through delegations.
   *
   * @generated from field: repeated google.protobuf.Any bundler_payment_messages = 5;
   */
  bundlerPaymentMessages: Any[] = [];

  /**
   * bundler_payment_gas_limit defines the gas limit to be used for the bundler payment.
   * This ensures that, since the bundler executes a list of UserOperations and there needs to
   * be minimal trust between bundler and UserOperation sender, the sender cannot consume
   * the whole bundle gas.
   *
   * @generated from field: uint64 bundler_payment_gas_limit = 6;
   */
  bundlerPaymentGasLimit = protoInt64.zero;

  /**
   * execution_messages expresses a list of messages that the account wants to execute.
   * This concretely is the intent of the transaction expressed as a UserOperation.
   *
   * @generated from field: repeated google.protobuf.Any execution_messages = 7;
   */
  executionMessages: Any[] = [];

  /**
   * execution_gas_limit defines the gas limit to be used for the execution of the UserOperation's
   * execution messages.
   *
   * @generated from field: uint64 execution_gas_limit = 8;
   */
  executionGasLimit = protoInt64.zero;

  /**
   * tx_compat is populated only when the operation is composed from a raw tx.
   * In fact if a TX comes and the sender of the TX is an abstracted account,
   * we convert the TX into a user operation, and try to authenticate using the
   * x/accounts authenticate method. If a bundler tries to send a UserOperation
   * with a populated tx_compat, the operation will immediately yield a failure.
   *
   * @generated from field: cosmos.accounts.v1.TxCompat tx_compat = 9;
   */
  txCompat?: TxCompat;

  constructor(data?: PartialMessage<UserOperation>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.accounts.v1.UserOperation";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "authentication_method", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "authentication_data", kind: "message", T: Any },
    { no: 4, name: "authentication_gas_limit", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "bundler_payment_messages", kind: "message", T: Any, repeated: true },
    { no: 6, name: "bundler_payment_gas_limit", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 7, name: "execution_messages", kind: "message", T: Any, repeated: true },
    { no: 8, name: "execution_gas_limit", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 9, name: "tx_compat", kind: "message", T: TxCompat },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserOperation {
    return new UserOperation().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserOperation {
    return new UserOperation().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserOperation {
    return new UserOperation().fromJsonString(jsonString, options);
  }

  static equals(a: UserOperation | PlainMessage<UserOperation> | undefined, b: UserOperation | PlainMessage<UserOperation> | undefined): boolean {
    return proto3.util.equals(UserOperation, a, b);
  }
}

/**
 * TxCompat provides compatibility for x/accounts abstracted account with the cosmos-sdk's Txs.
 * In fact TxCompat contains fields coming from the Tx in raw and decoded format. The Raw format
 * is mainly needed for proper sig verification.
 *
 * @generated from message cosmos.accounts.v1.TxCompat
 */
export class TxCompat extends Message<TxCompat> {
  /**
   * auth_info_bytes contains the auth info bytes of the tx.
   * Must not be modified.
   *
   * @generated from field: bytes auth_info_bytes = 1;
   */
  authInfoBytes = new Uint8Array(0);

  /**
   * body_bytes contains the body bytes of the tx.
   * must not be modified.
   *
   * @generated from field: bytes body_bytes = 2;
   */
  bodyBytes = new Uint8Array(0);

  constructor(data?: PartialMessage<TxCompat>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.accounts.v1.TxCompat";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "auth_info_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "body_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TxCompat {
    return new TxCompat().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TxCompat {
    return new TxCompat().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TxCompat {
    return new TxCompat().fromJsonString(jsonString, options);
  }

  static equals(a: TxCompat | PlainMessage<TxCompat> | undefined, b: TxCompat | PlainMessage<TxCompat> | undefined): boolean {
    return proto3.util.equals(TxCompat, a, b);
  }
}

/**
 * UserOperationResponse defines the response of a UserOperation.
 * If the operation fails the error field will be populated.
 *
 * @generated from message cosmos.accounts.v1.UserOperationResponse
 */
export class UserOperationResponse extends Message<UserOperationResponse> {
  /**
   * authentication_gas_used defines the gas used for the authentication part of the UserOperation.
   *
   * @generated from field: uint64 authentication_gas_used = 1;
   */
  authenticationGasUsed = protoInt64.zero;

  /**
   * bundler_payment_gas_used defines the gas used for the bundler payment part of the UserOperation.
   *
   * @generated from field: uint64 bundler_payment_gas_used = 2;
   */
  bundlerPaymentGasUsed = protoInt64.zero;

  /**
   * bundler_payment_responses defines the responses of the bundler payment messages.
   * It can be empty if the bundler does not need any form of payment.
   *
   * @generated from field: repeated google.protobuf.Any bundler_payment_responses = 3;
   */
  bundlerPaymentResponses: Any[] = [];

  /**
   * execution_gas_used defines the gas used for the execution part of the UserOperation.
   *
   * @generated from field: uint64 execution_gas_used = 4;
   */
  executionGasUsed = protoInt64.zero;

  /**
   * execution_responses defines the responses of the execution messages.
   *
   * @generated from field: repeated google.protobuf.Any execution_responses = 5;
   */
  executionResponses: Any[] = [];

  /**
   * error defines the error that occurred during the execution of the UserOperation.
   * If the error is not empty, the UserOperation failed.
   * Other fields might be populated even if the error is not empty, for example
   * if the operation fails after the authentication step, the authentication_gas_used
   * field will be populated.
   *
   * @generated from field: string error = 6;
   */
  error = "";

  constructor(data?: PartialMessage<UserOperationResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.accounts.v1.UserOperationResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "authentication_gas_used", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "bundler_payment_gas_used", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "bundler_payment_responses", kind: "message", T: Any, repeated: true },
    { no: 4, name: "execution_gas_used", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "execution_responses", kind: "message", T: Any, repeated: true },
    { no: 6, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserOperationResponse {
    return new UserOperationResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserOperationResponse {
    return new UserOperationResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserOperationResponse {
    return new UserOperationResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UserOperationResponse | PlainMessage<UserOperationResponse> | undefined, b: UserOperationResponse | PlainMessage<UserOperationResponse> | undefined): boolean {
    return proto3.util.equals(UserOperationResponse, a, b);
  }
}

