import { getCowApys } from '../common/getCowVaultApys.ts';

export const getBoofyCowEthereumApys = async () => {
  return await getCowApys('ethereum');
};
