import { getCowApys } from '../common/getCowVaultApys.ts';

export const getBoofyBaseCowApys = async () => {
  return await getCowApys('base');
};
