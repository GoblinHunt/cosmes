// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file injective/tokenfactory/v1beta1/events.proto (package injective.tokenfactory.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { Metadata } from "../../../cosmos/bank/v1beta1/bank_pb.js";

/**
 * @generated from message injective.tokenfactory.v1beta1.EventCreateTFDenom
 */
export class EventCreateTFDenom extends Message<EventCreateTFDenom> {
  /**
   * @generated from field: string account = 1;
   */
  account = "";

  /**
   * @generated from field: string denom = 2;
   */
  denom = "";

  constructor(data?: PartialMessage<EventCreateTFDenom>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.tokenfactory.v1beta1.EventCreateTFDenom";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "account", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventCreateTFDenom {
    return new EventCreateTFDenom().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventCreateTFDenom {
    return new EventCreateTFDenom().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventCreateTFDenom {
    return new EventCreateTFDenom().fromJsonString(jsonString, options);
  }

  static equals(a: EventCreateTFDenom | PlainMessage<EventCreateTFDenom> | undefined, b: EventCreateTFDenom | PlainMessage<EventCreateTFDenom> | undefined): boolean {
    return proto3.util.equals(EventCreateTFDenom, a, b);
  }
}

/**
 * @generated from message injective.tokenfactory.v1beta1.EventMintTFDenom
 */
export class EventMintTFDenom extends Message<EventMintTFDenom> {
  /**
   * @generated from field: string recipient_address = 1;
   */
  recipientAddress = "";

  /**
   * @generated from field: cosmos.base.v1beta1.Coin amount = 2;
   */
  amount?: Coin;

  constructor(data?: PartialMessage<EventMintTFDenom>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.tokenfactory.v1beta1.EventMintTFDenom";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "recipient_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventMintTFDenom {
    return new EventMintTFDenom().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventMintTFDenom {
    return new EventMintTFDenom().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventMintTFDenom {
    return new EventMintTFDenom().fromJsonString(jsonString, options);
  }

  static equals(a: EventMintTFDenom | PlainMessage<EventMintTFDenom> | undefined, b: EventMintTFDenom | PlainMessage<EventMintTFDenom> | undefined): boolean {
    return proto3.util.equals(EventMintTFDenom, a, b);
  }
}

/**
 * @generated from message injective.tokenfactory.v1beta1.EventBurnDenom
 */
export class EventBurnDenom extends Message<EventBurnDenom> {
  /**
   * @generated from field: string burner_address = 1;
   */
  burnerAddress = "";

  /**
   * @generated from field: cosmos.base.v1beta1.Coin amount = 2;
   */
  amount?: Coin;

  constructor(data?: PartialMessage<EventBurnDenom>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.tokenfactory.v1beta1.EventBurnDenom";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "burner_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventBurnDenom {
    return new EventBurnDenom().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventBurnDenom {
    return new EventBurnDenom().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventBurnDenom {
    return new EventBurnDenom().fromJsonString(jsonString, options);
  }

  static equals(a: EventBurnDenom | PlainMessage<EventBurnDenom> | undefined, b: EventBurnDenom | PlainMessage<EventBurnDenom> | undefined): boolean {
    return proto3.util.equals(EventBurnDenom, a, b);
  }
}

/**
 * @generated from message injective.tokenfactory.v1beta1.EventChangeTFAdmin
 */
export class EventChangeTFAdmin extends Message<EventChangeTFAdmin> {
  /**
   * @generated from field: string denom = 1;
   */
  denom = "";

  /**
   * @generated from field: string new_admin_address = 2;
   */
  newAdminAddress = "";

  constructor(data?: PartialMessage<EventChangeTFAdmin>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.tokenfactory.v1beta1.EventChangeTFAdmin";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "new_admin_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventChangeTFAdmin {
    return new EventChangeTFAdmin().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventChangeTFAdmin {
    return new EventChangeTFAdmin().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventChangeTFAdmin {
    return new EventChangeTFAdmin().fromJsonString(jsonString, options);
  }

  static equals(a: EventChangeTFAdmin | PlainMessage<EventChangeTFAdmin> | undefined, b: EventChangeTFAdmin | PlainMessage<EventChangeTFAdmin> | undefined): boolean {
    return proto3.util.equals(EventChangeTFAdmin, a, b);
  }
}

/**
 * @generated from message injective.tokenfactory.v1beta1.EventSetTFDenomMetadata
 */
export class EventSetTFDenomMetadata extends Message<EventSetTFDenomMetadata> {
  /**
   * @generated from field: string denom = 1;
   */
  denom = "";

  /**
   * @generated from field: cosmos.bank.v1beta1.Metadata metadata = 2;
   */
  metadata?: Metadata;

  constructor(data?: PartialMessage<EventSetTFDenomMetadata>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.tokenfactory.v1beta1.EventSetTFDenomMetadata";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "metadata", kind: "message", T: Metadata },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventSetTFDenomMetadata {
    return new EventSetTFDenomMetadata().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventSetTFDenomMetadata {
    return new EventSetTFDenomMetadata().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventSetTFDenomMetadata {
    return new EventSetTFDenomMetadata().fromJsonString(jsonString, options);
  }

  static equals(a: EventSetTFDenomMetadata | PlainMessage<EventSetTFDenomMetadata> | undefined, b: EventSetTFDenomMetadata | PlainMessage<EventSetTFDenomMetadata> | undefined): boolean {
    return proto3.util.equals(EventSetTFDenomMetadata, a, b);
  }
}

