import type { PricesById } from '../../../types/prices.ts';
import { getBoofyCowcentratedVaultPrices } from '../common/getBoofyCowcentratedVaultPrices.ts';

export const getBoofyCowMantlePrices = async (tokenPrices: PricesById) => {
  return await getBoofyCowcentratedVaultPrices('mantle', tokenPrices);
};
