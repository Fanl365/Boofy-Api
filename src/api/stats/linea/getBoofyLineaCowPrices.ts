import type { PricesById } from '../../../types/prices.ts';
import { getBoofyCowcentratedVaultPrices } from '../common/getBoofyCowcentratedVaultPrices.ts';

export const getBoofyCowLineaPrices = async (tokenPrices: PricesById) => {
  return await getBoofyCowcentratedVaultPrices('linea', tokenPrices);
};
