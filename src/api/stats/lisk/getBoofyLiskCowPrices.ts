import type { PricesById } from '../../../types/prices.ts';
import { getBoofyCowcentratedVaultPrices } from '../common/getBoofyCowcentratedVaultPrices.ts';

export const getBoofyCowLiskPrices = async (tokenPrices: PricesById) => {
  return await getBoofyCowcentratedVaultPrices('lisk', tokenPrices);
};
