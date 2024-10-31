// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file vsc/permissions/v1/permissions.proto (package vsc.permissions.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * PermissionEntry defines the account and fee factor for a permission
 *
 * @generated from message vsc.permissions.v1.PermissionEntry
 */
export class PermissionEntry extends Message<PermissionEntry> {
  /**
   * the account that has this permission (optional)
   *
   * @generated from field: string account = 1;
   */
  account = "";

  /**
   * the factor of fees that this account is charged (optional)
   *
   * @generated from field: string fee_factor = 2;
   */
  feeFactor = "";

  constructor(data?: PartialMessage<PermissionEntry>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "vsc.permissions.v1.PermissionEntry";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "account", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "fee_factor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PermissionEntry {
    return new PermissionEntry().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PermissionEntry {
    return new PermissionEntry().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PermissionEntry {
    return new PermissionEntry().fromJsonString(jsonString, options);
  }

  static equals(a: PermissionEntry | PlainMessage<PermissionEntry> | undefined, b: PermissionEntry | PlainMessage<PermissionEntry> | undefined): boolean {
    return proto3.util.equals(PermissionEntry, a, b);
  }
}

/**
 * Permission defines the permission and the accounts that have it
 *
 * @generated from message vsc.permissions.v1.Permission
 */
export class Permission extends Message<Permission> {
  /**
   * the permission name
   *
   * @generated from field: string permission_name = 1;
   */
  permissionName = "";

  /**
   * the array of accounts that have this permission
   *
   * @generated from field: repeated vsc.permissions.v1.PermissionEntry entries = 2;
   */
  entries: PermissionEntry[] = [];

  constructor(data?: PartialMessage<Permission>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "vsc.permissions.v1.Permission";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "permission_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "entries", kind: "message", T: PermissionEntry, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Permission {
    return new Permission().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Permission {
    return new Permission().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Permission {
    return new Permission().fromJsonString(jsonString, options);
  }

  static equals(a: Permission | PlainMessage<Permission> | undefined, b: Permission | PlainMessage<Permission> | undefined): boolean {
    return proto3.util.equals(Permission, a, b);
  }
}

/**
 * Permissions defines the array of permissions
 *
 * @generated from message vsc.permissions.v1.Permissions
 */
export class Permissions extends Message<Permissions> {
  /**
   * the array of permissions
   *
   * @generated from field: repeated vsc.permissions.v1.Permission permissions = 1;
   */
  permissions: Permission[] = [];

  constructor(data?: PartialMessage<Permissions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "vsc.permissions.v1.Permissions";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "permissions", kind: "message", T: Permission, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Permissions {
    return new Permissions().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Permissions {
    return new Permissions().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Permissions {
    return new Permissions().fromJsonString(jsonString, options);
  }

  static equals(a: Permissions | PlainMessage<Permissions> | undefined, b: Permissions | PlainMessage<Permissions> | undefined): boolean {
    return proto3.util.equals(Permissions, a, b);
  }
}
