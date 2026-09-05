import type { PricesById } from '../../../types/prices.ts';
import { getBoofyCowcentratedVaultPrices } from '../common/getBoofyCowcentratedVaultPrices.ts';

export const getBoofyCowHyperevmPrices = async (tokenPrices: PricesById) => {
  return await getBoofyCowcentratedVaultPrices('hyperevm', tokenPrices);
};
