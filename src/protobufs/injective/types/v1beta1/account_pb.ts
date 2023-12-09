// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file injective/types/v1beta1/account.proto (package injective.types.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { BaseAccount } from "../../../cosmos/auth/v1beta1/auth_pb.js";

/**
 * EthAccount implements the authtypes.AccountI interface and embeds an
 * authtypes.BaseAccount type. It is compatible with the auth AccountKeeper.
 *
 * @generated from message injective.types.v1beta1.EthAccount
 */
export class EthAccount extends Message<EthAccount> {
  /**
   * @generated from field: cosmos.auth.v1beta1.BaseAccount base_account = 1;
   */
  baseAccount?: BaseAccount;

  /**
   * @generated from field: bytes code_hash = 2;
   */
  codeHash = new Uint8Array(0);

  constructor(data?: PartialMessage<EthAccount>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.types.v1beta1.EthAccount";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "base_account", kind: "message", T: BaseAccount },
    { no: 2, name: "code_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EthAccount {
    return new EthAccount().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EthAccount {
    return new EthAccount().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EthAccount {
    return new EthAccount().fromJsonString(jsonString, options);
  }

  static equals(a: EthAccount | PlainMessage<EthAccount> | undefined, b: EthAccount | PlainMessage<EthAccount> | undefined): boolean {
    return proto3.util.equals(EthAccount, a, b);
  }
}
