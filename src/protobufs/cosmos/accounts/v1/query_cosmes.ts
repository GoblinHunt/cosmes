// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file cosmos/accounts/v1/query.proto (package cosmos.accounts.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AccountNumberRequest, AccountNumberResponse, AccountQueryRequest, AccountQueryResponse, AccountTypeRequest, AccountTypeResponse, SchemaRequest, SchemaResponse, SimulateUserOperationRequest, SimulateUserOperationResponse } from "./query_pb.js";

const TYPE_NAME = "cosmos.accounts.v1.Query";

/**
 * AccountQuery runs an account query.
 *
 * @generated from rpc cosmos.accounts.v1.Query.AccountQuery
 */
export const QueryAccountQueryService = {
  typeName: TYPE_NAME,
  method: "AccountQuery",
  Request: AccountQueryRequest,
  Response: AccountQueryResponse,
} as const;

/**
 * Schema returns an x/account schema. Unstable.
 *
 * @generated from rpc cosmos.accounts.v1.Query.Schema
 */
export const QuerySchemaService = {
  typeName: TYPE_NAME,
  method: "Schema",
  Request: SchemaRequest,
  Response: SchemaResponse,
} as const;

/**
 * AccountType returns the account type for an address.
 *
 * @generated from rpc cosmos.accounts.v1.Query.AccountType
 */
export const QueryAccountTypeService = {
  typeName: TYPE_NAME,
  method: "AccountType",
  Request: AccountTypeRequest,
  Response: AccountTypeResponse,
} as const;

/**
 * AccountNumber returns the account number given the account address.
 *
 * @generated from rpc cosmos.accounts.v1.Query.AccountNumber
 */
export const QueryAccountNumberService = {
  typeName: TYPE_NAME,
  method: "AccountNumber",
  Request: AccountNumberRequest,
  Response: AccountNumberResponse,
} as const;

/**
 * SimulateUserOperation simulates a user operation.
 *
 * @generated from rpc cosmos.accounts.v1.Query.SimulateUserOperation
 */
export const QuerySimulateUserOperationService = {
  typeName: TYPE_NAME,
  method: "SimulateUserOperation",
  Request: SimulateUserOperationRequest,
  Response: SimulateUserOperationResponse,
} as const;

