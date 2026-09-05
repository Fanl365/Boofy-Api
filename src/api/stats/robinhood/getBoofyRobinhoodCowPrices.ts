import type { PricesById } from '../../../types/prices.ts';
import { getBoofyCowcentratedVaultPrices } from '../common/getBoofyCowcentratedVaultPrices.ts';

export const getBoofyCowRobinhoodPrices = async (tokenPrices: PricesById) => {
  return await getBoofyCowcentratedVaultPrices('robinhood', tokenPrices);
};
