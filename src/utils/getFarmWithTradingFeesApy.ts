import { compound } from './compound.ts';

export const getFarmWithTradingFeesApy = (
  farmApr: number,
  tradingApr: number | undefined,
  compoundingsPerYear: number,
  t: number,
  shareAfterBoofyPerformanceFee: number
) => {
  const farmApy = farmApr ? compound(farmApr, compoundingsPerYear, t, shareAfterBoofyPerformanceFee) : 0;
  return (1 + farmApy) * (1 + (tradingApr || 0)) - 1;
};
