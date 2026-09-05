import type { PricesById } from '../../../types/prices.ts';
import { getBoofyCowcentratedVaultPrices } from '../common/getBoofyCowcentratedVaultPrices.ts';

export const getBoofyCowArbPrices = async (tokenPrices: PricesById) => {
  return await getBoofyCowcentratedVaultPrices('arbitrum', tokenPrices);
};
