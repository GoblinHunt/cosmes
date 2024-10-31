// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file vsc/epochs/v1/event.proto (package vsc.epochs.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from message vsc.epochs.v1.EventEpochStart
 */
export class EventEpochStart extends Message<EventEpochStart> {
  /**
   * Epoch number, starting from 1.
   *
   * @generated from field: uint64 epoch_number = 1;
   */
  epochNumber = protoInt64.zero;

  /**
   * The start timestamp of the epoch.
   *
   * @generated from field: google.protobuf.Timestamp epoch_start_time = 2;
   */
  epochStartTime?: Timestamp;

  constructor(data?: PartialMessage<EventEpochStart>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "vsc.epochs.v1.EventEpochStart";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "epoch_number", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "epoch_start_time", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventEpochStart {
    return new EventEpochStart().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventEpochStart {
    return new EventEpochStart().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventEpochStart {
    return new EventEpochStart().fromJsonString(jsonString, options);
  }

  static equals(a: EventEpochStart | PlainMessage<EventEpochStart> | undefined, b: EventEpochStart | PlainMessage<EventEpochStart> | undefined): boolean {
    return proto3.util.equals(EventEpochStart, a, b);
  }
}

/**
 * @generated from message vsc.epochs.v1.EventEpochEnd
 */
export class EventEpochEnd extends Message<EventEpochEnd> {
  /**
   * Epoch number, starting from 1.
   *
   * @generated from field: uint64 epoch_number = 1;
   */
  epochNumber = protoInt64.zero;

  constructor(data?: PartialMessage<EventEpochEnd>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "vsc.epochs.v1.EventEpochEnd";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "epoch_number", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventEpochEnd {
    return new EventEpochEnd().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventEpochEnd {
    return new EventEpochEnd().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventEpochEnd {
    return new EventEpochEnd().fromJsonString(jsonString, options);
  }

  static equals(a: EventEpochEnd | PlainMessage<EventEpochEnd> | undefined, b: EventEpochEnd | PlainMessage<EventEpochEnd> | undefined): boolean {
    return proto3.util.equals(EventEpochEnd, a, b);
  }
}
