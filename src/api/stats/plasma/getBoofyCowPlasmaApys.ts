import { getCowApys } from '../common/getCowVaultApys.ts';

export const getBoofyCowPlasmaApys = async () => {
  return await getCowApys('plasma');
};
