import type { PricesById } from '../../../types/prices.ts';
import { getBoofyCowcentratedVaultPrices } from '../common/getBoofyCowcentratedVaultPrices.ts';

export const getBoofyCowBasePrices = async (tokenPrices: PricesById) => {
  return await getBoofyCowcentratedVaultPrices('base', tokenPrices);
};
