import type { PricesById } from '../../../types/prices.ts';
import { getBoofyCowcentratedVaultPrices } from '../common/getBoofyCowcentratedVaultPrices.ts';

export const getBoofyCowScrollPrices = async (tokenPrices: PricesById) => {
  return await getBoofyCowcentratedVaultPrices('scroll', tokenPrices);
};
