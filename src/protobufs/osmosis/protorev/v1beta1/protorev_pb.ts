// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/protorev/v1beta1/protorev.proto (package osmosis.protorev.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { TakerFeesTracker } from "../../poolmanager/v1beta1/genesis_pb.js";

/**
 * TokenPairArbRoutes tracks all of the hot routes for a given pair of tokens
 *
 * @generated from message osmosis.protorev.v1beta1.TokenPairArbRoutes
 */
export class TokenPairArbRoutes extends Message<TokenPairArbRoutes> {
  /**
   * Stores all of the possible hot paths for a given pair of tokens
   *
   * @generated from field: repeated osmosis.protorev.v1beta1.Route arb_routes = 1;
   */
  arbRoutes: Route[] = [];

  /**
   * Token denomination of the first asset
   *
   * @generated from field: string token_in = 2;
   */
  tokenIn = "";

  /**
   * Token denomination of the second asset
   *
   * @generated from field: string token_out = 3;
   */
  tokenOut = "";

  constructor(data?: PartialMessage<TokenPairArbRoutes>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.protorev.v1beta1.TokenPairArbRoutes";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "arb_routes", kind: "message", T: Route, repeated: true },
    { no: 2, name: "token_in", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "token_out", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenPairArbRoutes {
    return new TokenPairArbRoutes().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenPairArbRoutes {
    return new TokenPairArbRoutes().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenPairArbRoutes {
    return new TokenPairArbRoutes().fromJsonString(jsonString, options);
  }

  static equals(a: TokenPairArbRoutes | PlainMessage<TokenPairArbRoutes> | undefined, b: TokenPairArbRoutes | PlainMessage<TokenPairArbRoutes> | undefined): boolean {
    return proto3.util.equals(TokenPairArbRoutes, a, b);
  }
}

/**
 * Route is a hot route for a given pair of tokens
 *
 * @generated from message osmosis.protorev.v1beta1.Route
 */
export class Route extends Message<Route> {
  /**
   * The pool IDs that are traversed in the directed cyclic graph (traversed
   * left
   * -> right)
   *
   * @generated from field: repeated osmosis.protorev.v1beta1.Trade trades = 1;
   */
  trades: Trade[] = [];

  /**
   * The step size that will be used to find the optimal swap amount in the
   * binary search
   *
   * @generated from field: string step_size = 2;
   */
  stepSize = "";

  constructor(data?: PartialMessage<Route>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.protorev.v1beta1.Route";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "trades", kind: "message", T: Trade, repeated: true },
    { no: 2, name: "step_size", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Route {
    return new Route().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Route {
    return new Route().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Route {
    return new Route().fromJsonString(jsonString, options);
  }

  static equals(a: Route | PlainMessage<Route> | undefined, b: Route | PlainMessage<Route> | undefined): boolean {
    return proto3.util.equals(Route, a, b);
  }
}

/**
 * Trade is a single trade in a route
 *
 * @generated from message osmosis.protorev.v1beta1.Trade
 */
export class Trade extends Message<Trade> {
  /**
   * The pool id of the pool that is traded on
   *
   * @generated from field: uint64 pool = 1;
   */
  pool = protoInt64.zero;

  /**
   * The denom of the token that is traded
   *
   * @generated from field: string token_in = 2;
   */
  tokenIn = "";

  /**
   * The denom of the token that is received
   *
   * @generated from field: string token_out = 3;
   */
  tokenOut = "";

  constructor(data?: PartialMessage<Trade>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.protorev.v1beta1.Trade";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "token_in", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "token_out", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Trade {
    return new Trade().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Trade {
    return new Trade().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Trade {
    return new Trade().fromJsonString(jsonString, options);
  }

  static equals(a: Trade | PlainMessage<Trade> | undefined, b: Trade | PlainMessage<Trade> | undefined): boolean {
    return proto3.util.equals(Trade, a, b);
  }
}

/**
 * RouteStatistics contains the number of trades the module has executed after a
 * swap on a given route and the profits from the trades
 *
 * @generated from message osmosis.protorev.v1beta1.RouteStatistics
 */
export class RouteStatistics extends Message<RouteStatistics> {
  /**
   * profits is the total profit from all trades on this route
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin profits = 1;
   */
  profits: Coin[] = [];

  /**
   * number_of_trades is the number of trades the module has executed using this
   * route
   *
   * @generated from field: string number_of_trades = 2;
   */
  numberOfTrades = "";

  /**
   * route is the route that was used (pool ids along the arbitrage route)
   *
   * @generated from field: repeated uint64 route = 3;
   */
  route: bigint[] = [];

  constructor(data?: PartialMessage<RouteStatistics>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.protorev.v1beta1.RouteStatistics";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "profits", kind: "message", T: Coin, repeated: true },
    { no: 2, name: "number_of_trades", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "route", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RouteStatistics {
    return new RouteStatistics().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RouteStatistics {
    return new RouteStatistics().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RouteStatistics {
    return new RouteStatistics().fromJsonString(jsonString, options);
  }

  static equals(a: RouteStatistics | PlainMessage<RouteStatistics> | undefined, b: RouteStatistics | PlainMessage<RouteStatistics> | undefined): boolean {
    return proto3.util.equals(RouteStatistics, a, b);
  }
}

/**
 * PoolWeights contains the weights of all of the different pool types. This
 * distinction is made and necessary because the execution time ranges
 * significantly between the different pool types. Each weight roughly
 * corresponds to the amount of time (in ms) it takes to execute a swap on that
 * pool type.
 *
 * DEPRECATED: This field is deprecated and will be removed in the next
 * release. It is replaced by the `info_by_pool_type` field.
 *
 * @generated from message osmosis.protorev.v1beta1.PoolWeights
 */
export class PoolWeights extends Message<PoolWeights> {
  /**
   * The weight of a stableswap pool
   *
   * @generated from field: uint64 stable_weight = 1;
   */
  stableWeight = protoInt64.zero;

  /**
   * The weight of a balancer pool
   *
   * @generated from field: uint64 balancer_weight = 2;
   */
  balancerWeight = protoInt64.zero;

  /**
   * The weight of a concentrated pool
   *
   * @generated from field: uint64 concentrated_weight = 3;
   */
  concentratedWeight = protoInt64.zero;

  /**
   * The weight of a cosmwasm pool
   *
   * @generated from field: uint64 cosmwasm_weight = 4;
   */
  cosmwasmWeight = protoInt64.zero;

  constructor(data?: PartialMessage<PoolWeights>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.protorev.v1beta1.PoolWeights";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "stable_weight", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "balancer_weight", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "concentrated_weight", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "cosmwasm_weight", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolWeights {
    return new PoolWeights().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolWeights {
    return new PoolWeights().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolWeights {
    return new PoolWeights().fromJsonString(jsonString, options);
  }

  static equals(a: PoolWeights | PlainMessage<PoolWeights> | undefined, b: PoolWeights | PlainMessage<PoolWeights> | undefined): boolean {
    return proto3.util.equals(PoolWeights, a, b);
  }
}

/**
 * InfoByPoolType contains information pertaining to how expensive (in terms of
 * gas and time) it is to execute a swap on a given pool type. This distinction
 * is made and necessary because the execution time ranges significantly between
 * the different pool types.
 *
 * @generated from message osmosis.protorev.v1beta1.InfoByPoolType
 */
export class InfoByPoolType extends Message<InfoByPoolType> {
  /**
   * The stable pool info
   *
   * @generated from field: osmosis.protorev.v1beta1.StablePoolInfo stable = 1;
   */
  stable?: StablePoolInfo;

  /**
   * The balancer pool info
   *
   * @generated from field: osmosis.protorev.v1beta1.BalancerPoolInfo balancer = 2;
   */
  balancer?: BalancerPoolInfo;

  /**
   * The concentrated pool info
   *
   * @generated from field: osmosis.protorev.v1beta1.ConcentratedPoolInfo concentrated = 3;
   */
  concentrated?: ConcentratedPoolInfo;

  /**
   * The cosmwasm pool info
   *
   * @generated from field: osmosis.protorev.v1beta1.CosmwasmPoolInfo cosmwasm = 4;
   */
  cosmwasm?: CosmwasmPoolInfo;

  constructor(data?: PartialMessage<InfoByPoolType>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.protorev.v1beta1.InfoByPoolType";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "stable", kind: "message", T: StablePoolInfo },
    { no: 2, name: "balancer", kind: "message", T: BalancerPoolInfo },
    { no: 3, name: "concentrated", kind: "message", T: ConcentratedPoolInfo },
    { no: 4, name: "cosmwasm", kind: "message", T: CosmwasmPoolInfo },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InfoByPoolType {
    return new InfoByPoolType().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InfoByPoolType {
    return new InfoByPoolType().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InfoByPoolType {
    return new InfoByPoolType().fromJsonString(jsonString, options);
  }

  static equals(a: InfoByPoolType | PlainMessage<InfoByPoolType> | undefined, b: InfoByPoolType | PlainMessage<InfoByPoolType> | undefined): boolean {
    return proto3.util.equals(InfoByPoolType, a, b);
  }
}

/**
 * StablePoolInfo contains meta data pertaining to a stableswap pool type.
 *
 * @generated from message osmosis.protorev.v1beta1.StablePoolInfo
 */
export class StablePoolInfo extends Message<StablePoolInfo> {
  /**
   * The weight of a stableswap pool
   *
   * @generated from field: uint64 weight = 1;
   */
  weight = protoInt64.zero;

  constructor(data?: PartialMessage<StablePoolInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.protorev.v1beta1.StablePoolInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "weight", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StablePoolInfo {
    return new StablePoolInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StablePoolInfo {
    return new StablePoolInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StablePoolInfo {
    return new StablePoolInfo().fromJsonString(jsonString, options);
  }

  static equals(a: StablePoolInfo | PlainMessage<StablePoolInfo> | undefined, b: StablePoolInfo | PlainMessage<StablePoolInfo> | undefined): boolean {
    return proto3.util.equals(StablePoolInfo, a, b);
  }
}

/**
 * BalancerPoolInfo contains meta data pertaining to a balancer pool type.
 *
 * @generated from message osmosis.protorev.v1beta1.BalancerPoolInfo
 */
export class BalancerPoolInfo extends Message<BalancerPoolInfo> {
  /**
   * The weight of a balancer pool
   *
   * @generated from field: uint64 weight = 1;
   */
  weight = protoInt64.zero;

  constructor(data?: PartialMessage<BalancerPoolInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.protorev.v1beta1.BalancerPoolInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "weight", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BalancerPoolInfo {
    return new BalancerPoolInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BalancerPoolInfo {
    return new BalancerPoolInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BalancerPoolInfo {
    return new BalancerPoolInfo().fromJsonString(jsonString, options);
  }

  static equals(a: BalancerPoolInfo | PlainMessage<BalancerPoolInfo> | undefined, b: BalancerPoolInfo | PlainMessage<BalancerPoolInfo> | undefined): boolean {
    return proto3.util.equals(BalancerPoolInfo, a, b);
  }
}

/**
 * ConcentratedPoolInfo contains meta data pertaining to a concentrated pool
 * type.
 *
 * @generated from message osmosis.protorev.v1beta1.ConcentratedPoolInfo
 */
export class ConcentratedPoolInfo extends Message<ConcentratedPoolInfo> {
  /**
   * The weight of a concentrated pool
   *
   * @generated from field: uint64 weight = 1;
   */
  weight = protoInt64.zero;

  /**
   * The maximum number of ticks we can move when rebalancing
   *
   * @generated from field: uint64 max_ticks_crossed = 2;
   */
  maxTicksCrossed = protoInt64.zero;

  constructor(data?: PartialMessage<ConcentratedPoolInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.protorev.v1beta1.ConcentratedPoolInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "weight", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "max_ticks_crossed", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConcentratedPoolInfo {
    return new ConcentratedPoolInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConcentratedPoolInfo {
    return new ConcentratedPoolInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConcentratedPoolInfo {
    return new ConcentratedPoolInfo().fromJsonString(jsonString, options);
  }

  static equals(a: ConcentratedPoolInfo | PlainMessage<ConcentratedPoolInfo> | undefined, b: ConcentratedPoolInfo | PlainMessage<ConcentratedPoolInfo> | undefined): boolean {
    return proto3.util.equals(ConcentratedPoolInfo, a, b);
  }
}

/**
 * CosmwasmPoolInfo contains meta data pertaining to a cosmwasm pool type.
 *
 * @generated from message osmosis.protorev.v1beta1.CosmwasmPoolInfo
 */
export class CosmwasmPoolInfo extends Message<CosmwasmPoolInfo> {
  /**
   * The weight of a cosmwasm pool (by contract address)
   *
   * @generated from field: repeated osmosis.protorev.v1beta1.WeightMap weight_maps = 1;
   */
  weightMaps: WeightMap[] = [];

  constructor(data?: PartialMessage<CosmwasmPoolInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.protorev.v1beta1.CosmwasmPoolInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "weight_maps", kind: "message", T: WeightMap, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CosmwasmPoolInfo {
    return new CosmwasmPoolInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CosmwasmPoolInfo {
    return new CosmwasmPoolInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CosmwasmPoolInfo {
    return new CosmwasmPoolInfo().fromJsonString(jsonString, options);
  }

  static equals(a: CosmwasmPoolInfo | PlainMessage<CosmwasmPoolInfo> | undefined, b: CosmwasmPoolInfo | PlainMessage<CosmwasmPoolInfo> | undefined): boolean {
    return proto3.util.equals(CosmwasmPoolInfo, a, b);
  }
}

/**
 * WeightMap maps a contract address to a weight. The weight of an address
 * corresponds to the amount of ms required to execute a swap on that contract.
 *
 * @generated from message osmosis.protorev.v1beta1.WeightMap
 */
export class WeightMap extends Message<WeightMap> {
  /**
   * The weight of a cosmwasm pool (by contract address)
   *
   * @generated from field: uint64 weight = 1;
   */
  weight = protoInt64.zero;

  /**
   * The contract address
   *
   * @generated from field: string contract_address = 2;
   */
  contractAddress = "";

  constructor(data?: PartialMessage<WeightMap>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.protorev.v1beta1.WeightMap";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "weight", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "contract_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WeightMap {
    return new WeightMap().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WeightMap {
    return new WeightMap().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WeightMap {
    return new WeightMap().fromJsonString(jsonString, options);
  }

  static equals(a: WeightMap | PlainMessage<WeightMap> | undefined, b: WeightMap | PlainMessage<WeightMap> | undefined): boolean {
    return proto3.util.equals(WeightMap, a, b);
  }
}

/**
 * BaseDenom represents a single base denom that the module uses for its
 * arbitrage trades. It contains the denom name alongside the step size of the
 * binary search that is used to find the optimal swap amount
 *
 * @generated from message osmosis.protorev.v1beta1.BaseDenom
 */
export class BaseDenom extends Message<BaseDenom> {
  /**
   * The denom i.e. name of the base denom (ex. uosmo)
   *
   * @generated from field: string denom = 1;
   */
  denom = "";

  /**
   * The step size of the binary search that is used to find the optimal swap
   * amount
   *
   * @generated from field: string step_size = 2;
   */
  stepSize = "";

  constructor(data?: PartialMessage<BaseDenom>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.protorev.v1beta1.BaseDenom";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "step_size", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BaseDenom {
    return new BaseDenom().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BaseDenom {
    return new BaseDenom().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BaseDenom {
    return new BaseDenom().fromJsonString(jsonString, options);
  }

  static equals(a: BaseDenom | PlainMessage<BaseDenom> | undefined, b: BaseDenom | PlainMessage<BaseDenom> | undefined): boolean {
    return proto3.util.equals(BaseDenom, a, b);
  }
}

/**
 * @generated from message osmosis.protorev.v1beta1.AllProtocolRevenue
 */
export class AllProtocolRevenue extends Message<AllProtocolRevenue> {
  /**
   * @generated from field: osmosis.poolmanager.v1beta1.TakerFeesTracker taker_fees_tracker = 1;
   */
  takerFeesTracker?: TakerFeesTracker;

  /**
   * @generated from field: osmosis.protorev.v1beta1.CyclicArbTracker cyclic_arb_tracker = 3;
   */
  cyclicArbTracker?: CyclicArbTracker;

  constructor(data?: PartialMessage<AllProtocolRevenue>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.protorev.v1beta1.AllProtocolRevenue";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "taker_fees_tracker", kind: "message", T: TakerFeesTracker },
    { no: 3, name: "cyclic_arb_tracker", kind: "message", T: CyclicArbTracker },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AllProtocolRevenue {
    return new AllProtocolRevenue().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AllProtocolRevenue {
    return new AllProtocolRevenue().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AllProtocolRevenue {
    return new AllProtocolRevenue().fromJsonString(jsonString, options);
  }

  static equals(a: AllProtocolRevenue | PlainMessage<AllProtocolRevenue> | undefined, b: AllProtocolRevenue | PlainMessage<AllProtocolRevenue> | undefined): boolean {
    return proto3.util.equals(AllProtocolRevenue, a, b);
  }
}

/**
 * @generated from message osmosis.protorev.v1beta1.CyclicArbTracker
 */
export class CyclicArbTracker extends Message<CyclicArbTracker> {
  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin cyclic_arb = 1;
   */
  cyclicArb: Coin[] = [];

  /**
   * @generated from field: int64 height_accounting_starts_from = 2;
   */
  heightAccountingStartsFrom = protoInt64.zero;

  constructor(data?: PartialMessage<CyclicArbTracker>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.protorev.v1beta1.CyclicArbTracker";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "cyclic_arb", kind: "message", T: Coin, repeated: true },
    { no: 2, name: "height_accounting_starts_from", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CyclicArbTracker {
    return new CyclicArbTracker().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CyclicArbTracker {
    return new CyclicArbTracker().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CyclicArbTracker {
    return new CyclicArbTracker().fromJsonString(jsonString, options);
  }

  static equals(a: CyclicArbTracker | PlainMessage<CyclicArbTracker> | undefined, b: CyclicArbTracker | PlainMessage<CyclicArbTracker> | undefined): boolean {
    return proto3.util.equals(CyclicArbTracker, a, b);
  }
}

