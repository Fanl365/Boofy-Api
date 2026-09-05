import type { PricesById } from '../../../types/prices.ts';
import { getBoofyCowcentratedVaultPrices } from '../common/getBoofyCowcentratedVaultPrices.ts';

export const getBoofyCowOPPrices = async (tokenPrices: PricesById) => {
  return await getBoofyCowcentratedVaultPrices('optimism', tokenPrices);
};
