// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file vsc/epochs/v1/state.proto (package vsc.epochs.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from message vsc.epochs.v1.EpochInfo
 */
export class EpochInfo extends Message<EpochInfo> {
  /**
   * A string identifier for the epoch. e.g. "15min" or "1hour"
   *
   * @generated from field: string identifier = 1;
   */
  identifier = "";

  /**
   * When the epoch repetitino should start.
   *
   * @generated from field: google.protobuf.Timestamp start_time = 2;
   */
  startTime?: Timestamp;

  /**
   * How long each epoch lasts for.
   *
   * @generated from field: google.protobuf.Duration duration = 3;
   */
  duration?: Duration;

  /**
   * The current epoch number, starting from 1.
   *
   * @generated from field: uint64 current_epoch = 4;
   */
  currentEpoch = protoInt64.zero;

  /**
   * The start timestamp of the current epoch.
   *
   * @generated from field: google.protobuf.Timestamp current_epoch_start_time = 5;
   */
  currentEpochStartTime?: Timestamp;

  /**
   * Whether or not this epoch has started. Set to true if current blocktime >=
   * start_time.
   *
   * @generated from field: bool epoch_counting_started = 6;
   */
  epochCountingStarted = false;

  /**
   * The block height at which the current epoch started at.
   *
   * @generated from field: int64 current_epoch_start_height = 7;
   */
  currentEpochStartHeight = protoInt64.zero;

  constructor(data?: PartialMessage<EpochInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "vsc.epochs.v1.EpochInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "identifier", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "start_time", kind: "message", T: Timestamp },
    { no: 3, name: "duration", kind: "message", T: Duration },
    { no: 4, name: "current_epoch", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "current_epoch_start_time", kind: "message", T: Timestamp },
    { no: 6, name: "epoch_counting_started", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "current_epoch_start_height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EpochInfo {
    return new EpochInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EpochInfo {
    return new EpochInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EpochInfo {
    return new EpochInfo().fromJsonString(jsonString, options);
  }

  static equals(a: EpochInfo | PlainMessage<EpochInfo> | undefined, b: EpochInfo | PlainMessage<EpochInfo> | undefined): boolean {
    return proto3.util.equals(EpochInfo, a, b);
  }
}

