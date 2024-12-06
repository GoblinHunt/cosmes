/**
 * The unique identifier of the wallet.
 */
export const WalletName = {
  STATION: "station",
  LUNCDASH: "luncdash",
  KEPLR: "keplr",
  LEAP: "leap",
  COMPASS: "compass",
  COSMOSTATION: "cosmostation",
  METAMASK_INJECTIVE: "metamask-injective",
  NINJI: "ninji",
  OWALLET: "owallet",
  GALAXYSTATION: "galaxystation",
} as const;
export type WalletName = (typeof WalletName)[keyof typeof WalletName];
