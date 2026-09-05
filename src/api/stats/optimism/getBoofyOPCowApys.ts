import { getCowApys } from '../common/getCowVaultApys.ts';

export const getBoofyOPCowApys = async () => {
  return await getCowApys('optimism');
};
