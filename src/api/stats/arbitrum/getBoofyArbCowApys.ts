import { getCowApys } from '../common/getCowVaultApys.ts';

export const getBoofyArbCowApys = async () => {
  return await getCowApys('arbitrum');
};
