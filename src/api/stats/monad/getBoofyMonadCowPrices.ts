import type { PricesById } from '../../../types/prices.ts';
import { getBoofyCowcentratedVaultPrices } from '../common/getBoofyCowcentratedVaultPrices.ts';

export const getBoofyCowMonadPrices = async (tokenPrices: PricesById) => {
  return await getBoofyCowcentratedVaultPrices('monad', tokenPrices);
};
