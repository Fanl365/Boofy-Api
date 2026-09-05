import type { PricesById } from '../../../types/prices.ts';
import { getBoofyCowcentratedVaultPrices } from '../common/getBoofyCowcentratedVaultPrices.ts';

export const getBoofyCowRootstockPrices = async (tokenPrices: PricesById) => {
  return await getBoofyCowcentratedVaultPrices('rootstock', tokenPrices);
};
