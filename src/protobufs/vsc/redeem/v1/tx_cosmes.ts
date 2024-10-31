// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file vsc/redeem/v1/tx.proto (package vsc.redeem.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgCloseChannels, MsgCloseChannelsResponse, MsgUnredeem, MsgUnredeemResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx_pb.js";

const TYPE_NAME = "vsc.redeem.v1.Msg";

/**
 * @generated from rpc vsc.redeem.v1.Msg.Unredeem
 */
export const MsgUnredeemService = {
  typeName: TYPE_NAME,
  method: "Unredeem",
  Request: MsgUnredeem,
  Response: MsgUnredeemResponse,
} as const;

/**
 * @generated from rpc vsc.redeem.v1.Msg.UpdateParams
 */
export const MsgUpdateParamsService = {
  typeName: TYPE_NAME,
  method: "UpdateParams",
  Request: MsgUpdateParams,
  Response: MsgUpdateParamsResponse,
} as const;

/**
 * @generated from rpc vsc.redeem.v1.Msg.CloseChannels
 */
export const MsgCloseChannelsService = {
  typeName: TYPE_NAME,
  method: "CloseChannels",
  Request: MsgCloseChannels,
  Response: MsgCloseChannelsResponse,
} as const;
