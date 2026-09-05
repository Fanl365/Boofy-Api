import type { PricesById } from '../../../types/prices.ts';
import { getBoofyCowcentratedVaultPrices } from '../common/getBoofyCowcentratedVaultPrices.ts';

export const getBoofyCowZkSyncPrices = async (tokenPrices: PricesById) => {
  return await getBoofyCowcentratedVaultPrices('zksync', tokenPrices);
};
