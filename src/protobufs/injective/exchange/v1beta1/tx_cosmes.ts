// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file injective/exchange/v1beta1/tx.proto (package injective.exchange.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgAdminUpdateBinaryOptionsMarket, MsgAdminUpdateBinaryOptionsMarketResponse, MsgBatchCancelBinaryOptionsOrders, MsgBatchCancelBinaryOptionsOrdersResponse, MsgBatchCancelDerivativeOrders, MsgBatchCancelDerivativeOrdersResponse, MsgBatchCancelSpotOrders, MsgBatchCancelSpotOrdersResponse, MsgBatchCreateDerivativeLimitOrders, MsgBatchCreateDerivativeLimitOrdersResponse, MsgBatchCreateSpotLimitOrders, MsgBatchCreateSpotLimitOrdersResponse, MsgBatchUpdateOrders, MsgBatchUpdateOrdersResponse, MsgCancelBinaryOptionsOrder, MsgCancelBinaryOptionsOrderResponse, MsgCancelDerivativeOrder, MsgCancelDerivativeOrderResponse, MsgCancelSpotOrder, MsgCancelSpotOrderResponse, MsgCreateBinaryOptionsLimitOrder, MsgCreateBinaryOptionsLimitOrderResponse, MsgCreateBinaryOptionsMarketOrder, MsgCreateBinaryOptionsMarketOrderResponse, MsgCreateDerivativeLimitOrder, MsgCreateDerivativeLimitOrderResponse, MsgCreateDerivativeMarketOrder, MsgCreateDerivativeMarketOrderResponse, MsgCreateSpotLimitOrder, MsgCreateSpotLimitOrderResponse, MsgCreateSpotMarketOrder, MsgCreateSpotMarketOrderResponse, MsgDeposit, MsgDepositResponse, MsgExternalTransfer, MsgExternalTransferResponse, MsgIncreasePositionMargin, MsgIncreasePositionMarginResponse, MsgInstantBinaryOptionsMarketLaunch, MsgInstantBinaryOptionsMarketLaunchResponse, MsgInstantExpiryFuturesMarketLaunch, MsgInstantExpiryFuturesMarketLaunchResponse, MsgInstantPerpetualMarketLaunch, MsgInstantPerpetualMarketLaunchResponse, MsgInstantSpotMarketLaunch, MsgInstantSpotMarketLaunchResponse, MsgLiquidatePosition, MsgLiquidatePositionResponse, MsgPrivilegedExecuteContract, MsgPrivilegedExecuteContractResponse, MsgReclaimLockedFunds, MsgReclaimLockedFundsResponse, MsgRewardsOptOut, MsgRewardsOptOutResponse, MsgSubaccountTransfer, MsgSubaccountTransferResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgWithdraw, MsgWithdrawResponse } from "./tx_pb.js";

const TYPE_NAME = "injective.exchange.v1beta1.Msg";

/**
 * Deposit defines a method for transferring coins from the sender's bank
 * balance into the subaccount's exchange deposits
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.Deposit
 */
export const MsgDepositService = {
  typeName: TYPE_NAME,
  method: "Deposit",
  Request: MsgDeposit,
  Response: MsgDepositResponse,
} as const;

/**
 * Withdraw defines a method for withdrawing coins from a subaccount's
 * deposits to the user's bank balance
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.Withdraw
 */
export const MsgWithdrawService = {
  typeName: TYPE_NAME,
  method: "Withdraw",
  Request: MsgWithdraw,
  Response: MsgWithdrawResponse,
} as const;

/**
 * InstantSpotMarketLaunch defines method for creating a spot market by paying
 * listing fee without governance
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.InstantSpotMarketLaunch
 */
export const MsgInstantSpotMarketLaunchService = {
  typeName: TYPE_NAME,
  method: "InstantSpotMarketLaunch",
  Request: MsgInstantSpotMarketLaunch,
  Response: MsgInstantSpotMarketLaunchResponse,
} as const;

/**
 * InstantPerpetualMarketLaunch defines a method for creating a new perpetual
 * futures market by paying listing fee without governance
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.InstantPerpetualMarketLaunch
 */
export const MsgInstantPerpetualMarketLaunchService = {
  typeName: TYPE_NAME,
  method: "InstantPerpetualMarketLaunch",
  Request: MsgInstantPerpetualMarketLaunch,
  Response: MsgInstantPerpetualMarketLaunchResponse,
} as const;

/**
 * InstantExpiryFuturesMarketLaunch defines a method for creating a new expiry
 * futures market by paying listing fee without governance
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.InstantExpiryFuturesMarketLaunch
 */
export const MsgInstantExpiryFuturesMarketLaunchService = {
  typeName: TYPE_NAME,
  method: "InstantExpiryFuturesMarketLaunch",
  Request: MsgInstantExpiryFuturesMarketLaunch,
  Response: MsgInstantExpiryFuturesMarketLaunchResponse,
} as const;

/**
 * CreateSpotLimitOrder defines a method for creating a new spot limit order.
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.CreateSpotLimitOrder
 */
export const MsgCreateSpotLimitOrderService = {
  typeName: TYPE_NAME,
  method: "CreateSpotLimitOrder",
  Request: MsgCreateSpotLimitOrder,
  Response: MsgCreateSpotLimitOrderResponse,
} as const;

/**
 * BatchCreateSpotLimitOrder defines a method for creating a new batch of spot
 * limit orders.
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.BatchCreateSpotLimitOrders
 */
export const MsgBatchCreateSpotLimitOrdersService = {
  typeName: TYPE_NAME,
  method: "BatchCreateSpotLimitOrders",
  Request: MsgBatchCreateSpotLimitOrders,
  Response: MsgBatchCreateSpotLimitOrdersResponse,
} as const;

/**
 * CreateSpotMarketOrder defines a method for creating a new spot market
 * order.
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.CreateSpotMarketOrder
 */
export const MsgCreateSpotMarketOrderService = {
  typeName: TYPE_NAME,
  method: "CreateSpotMarketOrder",
  Request: MsgCreateSpotMarketOrder,
  Response: MsgCreateSpotMarketOrderResponse,
} as const;

/**
 * MsgCancelSpotOrder defines a method for cancelling a spot order.
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.CancelSpotOrder
 */
export const MsgCancelSpotOrderService = {
  typeName: TYPE_NAME,
  method: "CancelSpotOrder",
  Request: MsgCancelSpotOrder,
  Response: MsgCancelSpotOrderResponse,
} as const;

/**
 * BatchCancelSpotOrders defines a method for cancelling a batch of spot
 * orders in a given market.
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.BatchCancelSpotOrders
 */
export const MsgBatchCancelSpotOrdersService = {
  typeName: TYPE_NAME,
  method: "BatchCancelSpotOrders",
  Request: MsgBatchCancelSpotOrders,
  Response: MsgBatchCancelSpotOrdersResponse,
} as const;

/**
 * BatchUpdateOrders defines a method for updating a batch of orders.
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.BatchUpdateOrders
 */
export const MsgBatchUpdateOrdersService = {
  typeName: TYPE_NAME,
  method: "BatchUpdateOrders",
  Request: MsgBatchUpdateOrders,
  Response: MsgBatchUpdateOrdersResponse,
} as const;

/**
 * PrivilegedExecuteContract defines a method for executing a Cosmwasm
 * contract from the exchange module with privileged capabilities.
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.PrivilegedExecuteContract
 */
export const MsgPrivilegedExecuteContractService = {
  typeName: TYPE_NAME,
  method: "PrivilegedExecuteContract",
  Request: MsgPrivilegedExecuteContract,
  Response: MsgPrivilegedExecuteContractResponse,
} as const;

/**
 * CreateDerivativeLimitOrder defines a method for creating a new derivative
 * limit order.
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.CreateDerivativeLimitOrder
 */
export const MsgCreateDerivativeLimitOrderService = {
  typeName: TYPE_NAME,
  method: "CreateDerivativeLimitOrder",
  Request: MsgCreateDerivativeLimitOrder,
  Response: MsgCreateDerivativeLimitOrderResponse,
} as const;

/**
 * BatchCreateDerivativeLimitOrders defines a method for creating a new batch
 * of derivative limit orders.
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.BatchCreateDerivativeLimitOrders
 */
export const MsgBatchCreateDerivativeLimitOrdersService = {
  typeName: TYPE_NAME,
  method: "BatchCreateDerivativeLimitOrders",
  Request: MsgBatchCreateDerivativeLimitOrders,
  Response: MsgBatchCreateDerivativeLimitOrdersResponse,
} as const;

/**
 * MsgCreateDerivativeLimitOrder defines a method for creating a new
 * derivative market order.
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.CreateDerivativeMarketOrder
 */
export const MsgCreateDerivativeMarketOrderService = {
  typeName: TYPE_NAME,
  method: "CreateDerivativeMarketOrder",
  Request: MsgCreateDerivativeMarketOrder,
  Response: MsgCreateDerivativeMarketOrderResponse,
} as const;

/**
 * MsgCancelDerivativeOrder defines a method for cancelling a derivative
 * order.
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.CancelDerivativeOrder
 */
export const MsgCancelDerivativeOrderService = {
  typeName: TYPE_NAME,
  method: "CancelDerivativeOrder",
  Request: MsgCancelDerivativeOrder,
  Response: MsgCancelDerivativeOrderResponse,
} as const;

/**
 * MsgBatchCancelDerivativeOrders defines a method for cancelling a batch of
 * derivative limit orders.
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.BatchCancelDerivativeOrders
 */
export const MsgBatchCancelDerivativeOrdersService = {
  typeName: TYPE_NAME,
  method: "BatchCancelDerivativeOrders",
  Request: MsgBatchCancelDerivativeOrders,
  Response: MsgBatchCancelDerivativeOrdersResponse,
} as const;

/**
 * InstantBinaryOptionsMarketLaunch defines method for creating a binary
 * options market by paying listing fee without governance
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.InstantBinaryOptionsMarketLaunch
 */
export const MsgInstantBinaryOptionsMarketLaunchService = {
  typeName: TYPE_NAME,
  method: "InstantBinaryOptionsMarketLaunch",
  Request: MsgInstantBinaryOptionsMarketLaunch,
  Response: MsgInstantBinaryOptionsMarketLaunchResponse,
} as const;

/**
 * CreateBinaryOptionsLimitOrder defines a method for creating a new binary
 * options limit order.
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.CreateBinaryOptionsLimitOrder
 */
export const MsgCreateBinaryOptionsLimitOrderService = {
  typeName: TYPE_NAME,
  method: "CreateBinaryOptionsLimitOrder",
  Request: MsgCreateBinaryOptionsLimitOrder,
  Response: MsgCreateBinaryOptionsLimitOrderResponse,
} as const;

/**
 * CreateBinaryOptionsMarketOrder defines a method for creating a new binary
 * options market order.
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.CreateBinaryOptionsMarketOrder
 */
export const MsgCreateBinaryOptionsMarketOrderService = {
  typeName: TYPE_NAME,
  method: "CreateBinaryOptionsMarketOrder",
  Request: MsgCreateBinaryOptionsMarketOrder,
  Response: MsgCreateBinaryOptionsMarketOrderResponse,
} as const;

/**
 * MsgCancelBinaryOptionsOrder defines a method for cancelling a binary
 * options order.
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.CancelBinaryOptionsOrder
 */
export const MsgCancelBinaryOptionsOrderService = {
  typeName: TYPE_NAME,
  method: "CancelBinaryOptionsOrder",
  Request: MsgCancelBinaryOptionsOrder,
  Response: MsgCancelBinaryOptionsOrderResponse,
} as const;

/**
 * BatchCancelBinaryOptionsOrders defines a method for cancelling a batch of
 * binary options limit orders.
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.BatchCancelBinaryOptionsOrders
 */
export const MsgBatchCancelBinaryOptionsOrdersService = {
  typeName: TYPE_NAME,
  method: "BatchCancelBinaryOptionsOrders",
  Request: MsgBatchCancelBinaryOptionsOrders,
  Response: MsgBatchCancelBinaryOptionsOrdersResponse,
} as const;

/**
 * SubaccountTransfer defines a method for transfer between subaccounts
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.SubaccountTransfer
 */
export const MsgSubaccountTransferService = {
  typeName: TYPE_NAME,
  method: "SubaccountTransfer",
  Request: MsgSubaccountTransfer,
  Response: MsgSubaccountTransferResponse,
} as const;

/**
 * ExternalTransfer defines a method for transfer between external accounts
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.ExternalTransfer
 */
export const MsgExternalTransferService = {
  typeName: TYPE_NAME,
  method: "ExternalTransfer",
  Request: MsgExternalTransfer,
  Response: MsgExternalTransferResponse,
} as const;

/**
 * LiquidatePosition defines a method for liquidating a position
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.LiquidatePosition
 */
export const MsgLiquidatePositionService = {
  typeName: TYPE_NAME,
  method: "LiquidatePosition",
  Request: MsgLiquidatePosition,
  Response: MsgLiquidatePositionResponse,
} as const;

/**
 * IncreasePositionMargin defines a method for increasing margin of a position
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.IncreasePositionMargin
 */
export const MsgIncreasePositionMarginService = {
  typeName: TYPE_NAME,
  method: "IncreasePositionMargin",
  Request: MsgIncreasePositionMargin,
  Response: MsgIncreasePositionMarginResponse,
} as const;

/**
 * RewardsOptOut defines a method for opting out of rewards
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.RewardsOptOut
 */
export const MsgRewardsOptOutService = {
  typeName: TYPE_NAME,
  method: "RewardsOptOut",
  Request: MsgRewardsOptOut,
  Response: MsgRewardsOptOutResponse,
} as const;

/**
 * AdminUpdateBinaryOptionsMarket defines method for updating a binary options
 * market by admin
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.AdminUpdateBinaryOptionsMarket
 */
export const MsgAdminUpdateBinaryOptionsMarketService = {
  typeName: TYPE_NAME,
  method: "AdminUpdateBinaryOptionsMarket",
  Request: MsgAdminUpdateBinaryOptionsMarket,
  Response: MsgAdminUpdateBinaryOptionsMarketResponse,
} as const;

/**
 * @generated from rpc injective.exchange.v1beta1.Msg.ReclaimLockedFunds
 */
export const MsgReclaimLockedFundsService = {
  typeName: TYPE_NAME,
  method: "ReclaimLockedFunds",
  Request: MsgReclaimLockedFunds,
  Response: MsgReclaimLockedFundsResponse,
} as const;

/**
 * @generated from rpc injective.exchange.v1beta1.Msg.UpdateParams
 */
export const MsgUpdateParamsService = {
  typeName: TYPE_NAME,
  method: "UpdateParams",
  Request: MsgUpdateParams,
  Response: MsgUpdateParamsResponse,
} as const;

