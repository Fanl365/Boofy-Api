import { getCowApys } from '../common/getCowVaultApys.ts';

export const getBoofyzkSyncCowApys = async () => {
  return await getCowApys('zksync');
};
