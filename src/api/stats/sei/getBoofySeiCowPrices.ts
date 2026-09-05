import type { PricesById } from '../../../types/prices.ts';
import { getBoofyCowcentratedVaultPrices } from '../common/getBoofyCowcentratedVaultPrices.ts';

export const getBoofyCowSeiPrices = async (tokenPrices: PricesById) => {
  return await getBoofyCowcentratedVaultPrices('sei', tokenPrices);
};
