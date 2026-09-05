import { getCowApys } from '../common/getCowVaultApys.ts';

export const getBoofyCowRootstockApys = async () => {
  return await getCowApys('rootstock');
};
