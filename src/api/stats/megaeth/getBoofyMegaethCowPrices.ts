import type { PricesById } from '../../../types/prices.ts';
import { getBoofyCowcentratedVaultPrices } from '../common/getBoofyCowcentratedVaultPrices.ts';

export const getBoofyCowMegaethPrices = async (tokenPrices: PricesById) => {
  return await getBoofyCowcentratedVaultPrices('megaeth', tokenPrices);
};
