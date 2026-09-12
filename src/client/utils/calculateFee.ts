import {
  CosmosBaseV1beta1Coin as Coin,
  CosmosTxV1beta1Fee as Fee,
  CosmosBaseAbciV1beta1GasInfo as GasInfo,
} from "cosmes/protobufs";

/**
 * Estimates the fee for a transaction. For txs which uses more gas, the
 * `multiplier` can be decreased (default: `1.4`).
 */
export function calculateFee(
  { gasUsed }: GasInfo,
  { amount, denom }: Coin,
  multiplier = 1.4
): Fee {
  const scaled = BigInt(Math.round(multiplier * 100));
  const gasLimit = ceilDiv(gasUsed * scaled, 100n);
  return new Fee({
    amount: [
      {
        amount: (gasLimit * BigInt(amount)).toString(),
        denom: denom,
      },
    ],
    gasLimit: gasLimit,
  });
}

function ceilDiv(x: bigint, y: bigint): bigint {
  return x / y + (x % y === 0n ? 0n : 1n);
}
