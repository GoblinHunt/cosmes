// Since: cosmos-sdk 0.46

// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file cosmos/gov/v1/gov.proto (package cosmos.gov.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Duration, Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
import { Coin } from "../../base/v1beta1/coin_pb.js";

/**
 * VoteOption enumerates the valid vote options for a given governance proposal.
 *
 * @generated from enum cosmos.gov.v1.VoteOption
 */
export enum VoteOption {
  /**
   * VOTE_OPTION_UNSPECIFIED defines a no-op vote option.
   *
   * @generated from enum value: VOTE_OPTION_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * VOTE_OPTION_YES defines a yes vote option.
   *
   * @generated from enum value: VOTE_OPTION_YES = 1;
   */
  YES = 1,

  /**
   * VOTE_OPTION_ABSTAIN defines an abstain vote option.
   *
   * @generated from enum value: VOTE_OPTION_ABSTAIN = 2;
   */
  ABSTAIN = 2,

  /**
   * VOTE_OPTION_NO defines a no vote option.
   *
   * @generated from enum value: VOTE_OPTION_NO = 3;
   */
  NO = 3,

  /**
   * VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option.
   *
   * @generated from enum value: VOTE_OPTION_NO_WITH_VETO = 4;
   */
  NO_WITH_VETO = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(VoteOption)
proto3.util.setEnumType(VoteOption, "cosmos.gov.v1.VoteOption", [
  { no: 0, name: "VOTE_OPTION_UNSPECIFIED" },
  { no: 1, name: "VOTE_OPTION_YES" },
  { no: 2, name: "VOTE_OPTION_ABSTAIN" },
  { no: 3, name: "VOTE_OPTION_NO" },
  { no: 4, name: "VOTE_OPTION_NO_WITH_VETO" },
]);

/**
 * ProposalStatus enumerates the valid statuses of a proposal.
 *
 * @generated from enum cosmos.gov.v1.ProposalStatus
 */
export enum ProposalStatus {
  /**
   * PROPOSAL_STATUS_UNSPECIFIED defines the default proposal status.
   *
   * @generated from enum value: PROPOSAL_STATUS_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
   * period.
   *
   * @generated from enum value: PROPOSAL_STATUS_DEPOSIT_PERIOD = 1;
   */
  DEPOSIT_PERIOD = 1,

  /**
   * PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
   * period.
   *
   * @generated from enum value: PROPOSAL_STATUS_VOTING_PERIOD = 2;
   */
  VOTING_PERIOD = 2,

  /**
   * PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
   * passed.
   *
   * @generated from enum value: PROPOSAL_STATUS_PASSED = 3;
   */
  PASSED = 3,

  /**
   * PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
   * been rejected.
   *
   * @generated from enum value: PROPOSAL_STATUS_REJECTED = 4;
   */
  REJECTED = 4,

  /**
   * PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
   * failed.
   *
   * @generated from enum value: PROPOSAL_STATUS_FAILED = 5;
   */
  FAILED = 5,
}
// Retrieve enum metadata with: proto3.getEnumType(ProposalStatus)
proto3.util.setEnumType(ProposalStatus, "cosmos.gov.v1.ProposalStatus", [
  { no: 0, name: "PROPOSAL_STATUS_UNSPECIFIED" },
  { no: 1, name: "PROPOSAL_STATUS_DEPOSIT_PERIOD" },
  { no: 2, name: "PROPOSAL_STATUS_VOTING_PERIOD" },
  { no: 3, name: "PROPOSAL_STATUS_PASSED" },
  { no: 4, name: "PROPOSAL_STATUS_REJECTED" },
  { no: 5, name: "PROPOSAL_STATUS_FAILED" },
]);

/**
 * WeightedVoteOption defines a unit of vote for vote split.
 *
 * @generated from message cosmos.gov.v1.WeightedVoteOption
 */
export class WeightedVoteOption extends Message<WeightedVoteOption> {
  /**
   * option defines the valid vote options, it must not contain duplicate vote options.
   *
   * @generated from field: cosmos.gov.v1.VoteOption option = 1;
   */
  option = VoteOption.UNSPECIFIED;

  /**
   * weight is the vote weight associated with the vote option.
   *
   * @generated from field: string weight = 2;
   */
  weight = "";

  constructor(data?: PartialMessage<WeightedVoteOption>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.v1.WeightedVoteOption";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "option", kind: "enum", T: proto3.getEnumType(VoteOption) },
    { no: 2, name: "weight", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WeightedVoteOption {
    return new WeightedVoteOption().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WeightedVoteOption {
    return new WeightedVoteOption().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WeightedVoteOption {
    return new WeightedVoteOption().fromJsonString(jsonString, options);
  }

  static equals(a: WeightedVoteOption | PlainMessage<WeightedVoteOption> | undefined, b: WeightedVoteOption | PlainMessage<WeightedVoteOption> | undefined): boolean {
    return proto3.util.equals(WeightedVoteOption, a, b);
  }
}

/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 *
 * @generated from message cosmos.gov.v1.Deposit
 */
export class Deposit extends Message<Deposit> {
  /**
   * proposal_id defines the unique id of the proposal.
   *
   * @generated from field: uint64 proposal_id = 1;
   */
  proposalId = protoInt64.zero;

  /**
   * depositor defines the deposit addresses from the proposals.
   *
   * @generated from field: string depositor = 2;
   */
  depositor = "";

  /**
   * amount to be deposited by depositor.
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 3;
   */
  amount: Coin[] = [];

  constructor(data?: PartialMessage<Deposit>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.v1.Deposit";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "depositor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Deposit {
    return new Deposit().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Deposit {
    return new Deposit().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Deposit {
    return new Deposit().fromJsonString(jsonString, options);
  }

  static equals(a: Deposit | PlainMessage<Deposit> | undefined, b: Deposit | PlainMessage<Deposit> | undefined): boolean {
    return proto3.util.equals(Deposit, a, b);
  }
}

/**
 * Proposal defines the core field members of a governance proposal.
 *
 * @generated from message cosmos.gov.v1.Proposal
 */
export class Proposal extends Message<Proposal> {
  /**
   * id defines the unique id of the proposal.
   *
   * @generated from field: uint64 id = 1;
   */
  id = protoInt64.zero;

  /**
   * messages are the arbitrary messages to be executed if the proposal passes.
   *
   * @generated from field: repeated google.protobuf.Any messages = 2;
   */
  messages: Any[] = [];

  /**
   * status defines the proposal status.
   *
   * @generated from field: cosmos.gov.v1.ProposalStatus status = 3;
   */
  status = ProposalStatus.UNSPECIFIED;

  /**
   * final_tally_result is the final tally result of the proposal. When
   * querying a proposal via gRPC, this field is not populated until the
   * proposal's voting period has ended.
   *
   * @generated from field: cosmos.gov.v1.TallyResult final_tally_result = 4;
   */
  finalTallyResult?: TallyResult;

  /**
   * submit_time is the time of proposal submission.
   *
   * @generated from field: google.protobuf.Timestamp submit_time = 5;
   */
  submitTime?: Timestamp;

  /**
   * deposit_end_time is the end time for deposition.
   *
   * @generated from field: google.protobuf.Timestamp deposit_end_time = 6;
   */
  depositEndTime?: Timestamp;

  /**
   * total_deposit is the total deposit on the proposal.
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin total_deposit = 7;
   */
  totalDeposit: Coin[] = [];

  /**
   * voting_start_time is the starting time to vote on a proposal.
   *
   * @generated from field: google.protobuf.Timestamp voting_start_time = 8;
   */
  votingStartTime?: Timestamp;

  /**
   * voting_end_time is the end time of voting on a proposal.
   *
   * @generated from field: google.protobuf.Timestamp voting_end_time = 9;
   */
  votingEndTime?: Timestamp;

  /**
   * metadata is any arbitrary metadata attached to the proposal.
   *
   * @generated from field: string metadata = 10;
   */
  metadata = "";

  /**
   * title is the title of the proposal
   *
   * Since: cosmos-sdk 0.47
   *
   * @generated from field: string title = 11;
   */
  title = "";

  /**
   * summary is a short summary of the proposal
   *
   * Since: cosmos-sdk 0.47
   *
   * @generated from field: string summary = 12;
   */
  summary = "";

  /**
   * Proposer is the address of the proposal sumbitter
   *
   * Since: cosmos-sdk 0.47
   *
   * @generated from field: string proposer = 13;
   */
  proposer = "";

  constructor(data?: PartialMessage<Proposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.v1.Proposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "messages", kind: "message", T: Any, repeated: true },
    { no: 3, name: "status", kind: "enum", T: proto3.getEnumType(ProposalStatus) },
    { no: 4, name: "final_tally_result", kind: "message", T: TallyResult },
    { no: 5, name: "submit_time", kind: "message", T: Timestamp },
    { no: 6, name: "deposit_end_time", kind: "message", T: Timestamp },
    { no: 7, name: "total_deposit", kind: "message", T: Coin, repeated: true },
    { no: 8, name: "voting_start_time", kind: "message", T: Timestamp },
    { no: 9, name: "voting_end_time", kind: "message", T: Timestamp },
    { no: 10, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "summary", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "proposer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Proposal {
    return new Proposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Proposal {
    return new Proposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Proposal {
    return new Proposal().fromJsonString(jsonString, options);
  }

  static equals(a: Proposal | PlainMessage<Proposal> | undefined, b: Proposal | PlainMessage<Proposal> | undefined): boolean {
    return proto3.util.equals(Proposal, a, b);
  }
}

/**
 * TallyResult defines a standard tally for a governance proposal.
 *
 * @generated from message cosmos.gov.v1.TallyResult
 */
export class TallyResult extends Message<TallyResult> {
  /**
   * yes_count is the number of yes votes on a proposal.
   *
   * @generated from field: string yes_count = 1;
   */
  yesCount = "";

  /**
   * abstain_count is the number of abstain votes on a proposal.
   *
   * @generated from field: string abstain_count = 2;
   */
  abstainCount = "";

  /**
   * no_count is the number of no votes on a proposal.
   *
   * @generated from field: string no_count = 3;
   */
  noCount = "";

  /**
   * no_with_veto_count is the number of no with veto votes on a proposal.
   *
   * @generated from field: string no_with_veto_count = 4;
   */
  noWithVetoCount = "";

  constructor(data?: PartialMessage<TallyResult>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.v1.TallyResult";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "yes_count", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "abstain_count", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "no_count", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "no_with_veto_count", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TallyResult {
    return new TallyResult().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TallyResult {
    return new TallyResult().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TallyResult {
    return new TallyResult().fromJsonString(jsonString, options);
  }

  static equals(a: TallyResult | PlainMessage<TallyResult> | undefined, b: TallyResult | PlainMessage<TallyResult> | undefined): boolean {
    return proto3.util.equals(TallyResult, a, b);
  }
}

/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 *
 * @generated from message cosmos.gov.v1.Vote
 */
export class Vote extends Message<Vote> {
  /**
   * proposal_id defines the unique id of the proposal.
   *
   * @generated from field: uint64 proposal_id = 1;
   */
  proposalId = protoInt64.zero;

  /**
   * voter is the voter address of the proposal.
   *
   * @generated from field: string voter = 2;
   */
  voter = "";

  /**
   * options is the weighted vote options.
   *
   * @generated from field: repeated cosmos.gov.v1.WeightedVoteOption options = 4;
   */
  options: WeightedVoteOption[] = [];

  /**
   * metadata is any  arbitrary metadata to attached to the vote.
   *
   * @generated from field: string metadata = 5;
   */
  metadata = "";

  constructor(data?: PartialMessage<Vote>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.v1.Vote";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "voter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "options", kind: "message", T: WeightedVoteOption, repeated: true },
    { no: 5, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Vote {
    return new Vote().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Vote {
    return new Vote().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Vote {
    return new Vote().fromJsonString(jsonString, options);
  }

  static equals(a: Vote | PlainMessage<Vote> | undefined, b: Vote | PlainMessage<Vote> | undefined): boolean {
    return proto3.util.equals(Vote, a, b);
  }
}

/**
 * DepositParams defines the params for deposits on governance proposals.
 *
 * @generated from message cosmos.gov.v1.DepositParams
 */
export class DepositParams extends Message<DepositParams> {
  /**
   * Minimum deposit for a proposal to enter voting period.
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin min_deposit = 1;
   */
  minDeposit: Coin[] = [];

  /**
   * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
   * months.
   *
   * @generated from field: google.protobuf.Duration max_deposit_period = 2;
   */
  maxDepositPeriod?: Duration;

  constructor(data?: PartialMessage<DepositParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.v1.DepositParams";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "min_deposit", kind: "message", T: Coin, repeated: true },
    { no: 2, name: "max_deposit_period", kind: "message", T: Duration },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DepositParams {
    return new DepositParams().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DepositParams {
    return new DepositParams().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DepositParams {
    return new DepositParams().fromJsonString(jsonString, options);
  }

  static equals(a: DepositParams | PlainMessage<DepositParams> | undefined, b: DepositParams | PlainMessage<DepositParams> | undefined): boolean {
    return proto3.util.equals(DepositParams, a, b);
  }
}

/**
 * VotingParams defines the params for voting on governance proposals.
 *
 * @generated from message cosmos.gov.v1.VotingParams
 */
export class VotingParams extends Message<VotingParams> {
  /**
   * Duration of the voting period.
   *
   * @generated from field: google.protobuf.Duration voting_period = 1;
   */
  votingPeriod?: Duration;

  constructor(data?: PartialMessage<VotingParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.v1.VotingParams";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "voting_period", kind: "message", T: Duration },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VotingParams {
    return new VotingParams().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VotingParams {
    return new VotingParams().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VotingParams {
    return new VotingParams().fromJsonString(jsonString, options);
  }

  static equals(a: VotingParams | PlainMessage<VotingParams> | undefined, b: VotingParams | PlainMessage<VotingParams> | undefined): boolean {
    return proto3.util.equals(VotingParams, a, b);
  }
}

/**
 * TallyParams defines the params for tallying votes on governance proposals.
 *
 * @generated from message cosmos.gov.v1.TallyParams
 */
export class TallyParams extends Message<TallyParams> {
  /**
   * Minimum percentage of total stake needed to vote for a result to be
   * considered valid.
   *
   * @generated from field: string quorum = 1;
   */
  quorum = "";

  /**
   * Minimum proportion of Yes votes for proposal to pass. Default value: 0.5.
   *
   * @generated from field: string threshold = 2;
   */
  threshold = "";

  /**
   * Minimum value of Veto votes to Total votes ratio for proposal to be
   * vetoed. Default value: 1/3.
   *
   * @generated from field: string veto_threshold = 3;
   */
  vetoThreshold = "";

  constructor(data?: PartialMessage<TallyParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.v1.TallyParams";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "quorum", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "threshold", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "veto_threshold", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TallyParams {
    return new TallyParams().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TallyParams {
    return new TallyParams().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TallyParams {
    return new TallyParams().fromJsonString(jsonString, options);
  }

  static equals(a: TallyParams | PlainMessage<TallyParams> | undefined, b: TallyParams | PlainMessage<TallyParams> | undefined): boolean {
    return proto3.util.equals(TallyParams, a, b);
  }
}

/**
 * Params defines the parameters for the x/gov module.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.gov.v1.Params
 */
export class Params extends Message<Params> {
  /**
   * Minimum deposit for a proposal to enter voting period.
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin min_deposit = 1;
   */
  minDeposit: Coin[] = [];

  /**
   * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
   * months.
   *
   * @generated from field: google.protobuf.Duration max_deposit_period = 2;
   */
  maxDepositPeriod?: Duration;

  /**
   * Duration of the voting period.
   *
   * @generated from field: google.protobuf.Duration voting_period = 3;
   */
  votingPeriod?: Duration;

  /**
   *  Minimum percentage of total stake needed to vote for a result to be
   *  considered valid.
   *
   * @generated from field: string quorum = 4;
   */
  quorum = "";

  /**
   *  Minimum proportion of Yes votes for proposal to pass. Default value: 0.5.
   *
   * @generated from field: string threshold = 5;
   */
  threshold = "";

  /**
   *  Minimum value of Veto votes to Total votes ratio for proposal to be
   *  vetoed. Default value: 1/3.
   *
   * @generated from field: string veto_threshold = 6;
   */
  vetoThreshold = "";

  /**
   *  The ratio representing the proportion of the deposit value that must be paid at proposal submission.
   *
   * @generated from field: string min_initial_deposit_ratio = 7;
   */
  minInitialDepositRatio = "";

  /**
   * burn deposits if a proposal does not meet quorum
   *
   * @generated from field: bool burn_vote_quorum = 13;
   */
  burnVoteQuorum = false;

  /**
   * burn deposits if the proposal does not enter voting period
   *
   * @generated from field: bool burn_proposal_deposit_prevote = 14;
   */
  burnProposalDepositPrevote = false;

  /**
   * burn deposits if quorum with vote type no_veto is met
   *
   * @generated from field: bool burn_vote_veto = 15;
   */
  burnVoteVeto = false;

  constructor(data?: PartialMessage<Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.v1.Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "min_deposit", kind: "message", T: Coin, repeated: true },
    { no: 2, name: "max_deposit_period", kind: "message", T: Duration },
    { no: 3, name: "voting_period", kind: "message", T: Duration },
    { no: 4, name: "quorum", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "threshold", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "veto_threshold", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "min_initial_deposit_ratio", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "burn_vote_quorum", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 14, name: "burn_proposal_deposit_prevote", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 15, name: "burn_vote_veto", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params {
    return new Params().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params {
    return new Params().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params {
    return new Params().fromJsonString(jsonString, options);
  }

  static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean {
    return proto3.util.equals(Params, a, b);
  }
}

