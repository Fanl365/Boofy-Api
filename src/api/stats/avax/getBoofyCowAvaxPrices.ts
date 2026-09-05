import type { PricesById } from '../../../types/prices.ts';
import { getBoofyCowcentratedVaultPrices } from '../common/getBoofyCowcentratedVaultPrices.ts';

export const getBoofyCowAvaxPrices = async (tokenPrices: PricesById) => {
  return await getBoofyCowcentratedVaultPrices('avax', tokenPrices);
};
