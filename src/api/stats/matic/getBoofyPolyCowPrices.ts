import type { PricesById } from '../../../types/prices.ts';
import { getBoofyCowcentratedVaultPrices } from '../common/getBoofyCowcentratedVaultPrices.ts';

export const getBoofyCowPolyPrices = async (tokenPrices: PricesById) => {
  return await getBoofyCowcentratedVaultPrices('polygon', tokenPrices);
};
