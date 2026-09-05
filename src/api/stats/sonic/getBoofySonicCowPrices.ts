import type { PricesById } from '../../../types/prices.ts';
import { getBoofyCowcentratedVaultPrices } from '../common/getBoofyCowcentratedVaultPrices.ts';

export const getBoofyCowSonicPrices = async (tokenPrices: PricesById) => {
  return await getBoofyCowcentratedVaultPrices('sonic', tokenPrices);
};
