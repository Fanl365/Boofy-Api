import { getCowApys } from '../common/getCowVaultApys.ts';

export const getBoofyGnosisCowApys = async () => {
  return await getCowApys('gnosis');
};
