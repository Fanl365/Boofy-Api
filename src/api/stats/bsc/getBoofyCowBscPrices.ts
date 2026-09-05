import type { PricesById } from '../../../types/prices.ts';
import { getBoofyCowcentratedVaultPrices } from '../common/getBoofyCowcentratedVaultPrices.ts';

export const getBoofyCowBscPrices = async (tokenPrices: PricesById) => {
  return await getBoofyCowcentratedVaultPrices('bsc', tokenPrices);
};
