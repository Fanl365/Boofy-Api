import type { PricesById } from '../../../types/prices.ts';
import { getBoofyCowcentratedVaultPrices } from '../common/getBoofyCowcentratedVaultPrices.ts';

export const getBoofyCowPlasmaPrices = async (tokenPrices: PricesById) => {
  return await getBoofyCowcentratedVaultPrices('plasma', tokenPrices);
};
