// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file vsc/drand/query.proto (package vsc.drand, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryParamsRequest, QueryParamsResponse } from "./query_pb.js";

const TYPE_NAME = "vsc.drand.Query";

/**
 * Parameters queries the parameters of the module.
 *
 * @generated from rpc vsc.drand.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: QueryParamsRequest,
  Response: QueryParamsResponse,
} as const;

