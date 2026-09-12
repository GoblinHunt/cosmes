import { describe, expect, it } from "vitest";

import { GasInfo } from "../../protobufs/cosmos/base/abci/v1beta1/abci_pb";
import { Coin } from "../../protobufs/cosmos/base/v1beta1/coin_pb";

import { calculateFee } from "./calculateFee";

describe("calculateFee", () => {
  it("should round the gas limit and fee up to the nearest integer", () => {
    const gasInfo = new GasInfo({ gasUsed: 1000001n });
    const gasPrice = new Coin({ amount: "3", denom: "uatom" });
    const fee = calculateFee(gasInfo, gasPrice);
    expect(fee.gasLimit).toBe(1400002n);
    expect(fee.amount[0]?.amount).toBe("4200006");
  });

  it("should keep exact integer amounts beyond 2^53", () => {
    const gasInfo = new GasInfo({ gasUsed: 500000n });
    const gasPrice = new Coin({
      amount: "10000000000000000000",
      denom: "uatom",
    });
    const fee = calculateFee(gasInfo, gasPrice);
    expect(fee.gasLimit).toBe(700000n);
    expect(fee.amount[0]?.amount).toBe("7000000000000000000000000");
  });
});
