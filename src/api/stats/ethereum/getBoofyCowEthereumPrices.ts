import type { PricesById } from '../../../types/prices.ts';
import { getBoofyCowcentratedVaultPrices } from '../common/getBoofyCowcentratedVaultPrices.ts';

export const getBoofyCowEthereumPrices = async (tokenPrices: PricesById) => {
  return await getBoofyCowcentratedVaultPrices('ethereum', tokenPrices);
};
