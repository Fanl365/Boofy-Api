import type { ApiChain } from '../../utils/chain.ts';
import { typedEntries } from '../../utils/object.ts';
import { type CowClm, validateCowClms } from './types.ts';
import arbitrumPools from '../../data/arbitrum/boofyCowVaults.json' with { type: 'json' };
import avaxPools from '../../data/avax/boofyCowVaults.json' with { type: 'json' };
import basePools from '../../data/base/boofyCowVaults.json' with { type: 'json' };
import berachainPools from '../../data/berachain/boofyCowVaults.json' with { type: 'json' };
import bscPools from '../../data/bsc/boofyCowVaults.json' with { type: 'json' };
import ethereumPools from '../../data/ethereum/boofyCowVaults.json' with { type: 'json' };
import gnosisPools from '../../data/gnosis/boofyCowVaults.json' with { type: 'json' };
import hyperevmPools from '../../data/hyperevm/boofyCowVaults.json' with { type: 'json' };
import lineaPools from '../../data/linea/boofyCowVaults.json' with { type: 'json' };
import liskPools from '../../data/lisk/boofyCowVaults.json' with { type: 'json' };
import mantlePools from '../../data/mantle/boofyCowVaults.json' with { type: 'json' };
import polygonPools from '../../data/matic/boofyCowVaults.json' with { type: 'json' };
import megaethPools from '../../data/megaeth/boofyCowVaults.json' with { type: 'json' };
import monadPools from '../../data/monad/boofyCowVaults.json' with { type: 'json' };
import optimismPools from '../../data/optimism/boofyCowVaults.json' with { type: 'json' };
import plasmaPools from '../../data/plasma/boofyCowVaults.json' with { type: 'json' };
import robinhoodPools from '../../data/robinhood/boofyCowVaults.json' with { type: 'json' };
import rootstockPools from '../../data/rootstock/boofyCowVaults.json' with { type: 'json' };
import scrollPools from '../../data/scroll/boofyCowVaults.json' with { type: 'json' };
import seiPools from '../../data/sei/boofyCowVaults.json' with { type: 'json' };
import sonicPools from '../../data/sonic/boofyCowVaults.json' with { type: 'json' };
import zksyncPools from '../../data/zksync/boofyCowVaults.json' with { type: 'json' };

const chainToClms: Readonly<Partial<Record<ApiChain, CowClm[]>>> = {
  optimism: validateCowClms(optimismPools),
  base: validateCowClms(basePools),
  arbitrum: validateCowClms(arbitrumPools),
  linea: validateCowClms(lineaPools),
  polygon: validateCowClms(polygonPools),
  zksync: validateCowClms(zksyncPools),
  mantle: validateCowClms(mantlePools),
  sei: validateCowClms(seiPools),
  bsc: validateCowClms(bscPools),
  avax: validateCowClms(avaxPools),
  rootstock: validateCowClms(rootstockPools),
  scroll: validateCowClms(scrollPools),
  lisk: validateCowClms(liskPools),
  sonic: validateCowClms(sonicPools),
  berachain: validateCowClms(berachainPools),
  gnosis: validateCowClms(gnosisPools),
  hyperevm: validateCowClms(hyperevmPools),
  plasma: validateCowClms(plasmaPools),
  monad: validateCowClms(monadPools),
  megaeth: validateCowClms(megaethPools),
  robinhood: validateCowClms(robinhoodPools),
  ethereum: validateCowClms(ethereumPools),
};

const chainsWithClms: ReadonlyArray<ApiChain> = typedEntries(chainToClms)
  .filter(([, clms]) => clms !== undefined && clms.length > 0)
  .map(([chainId]) => chainId);

export function getCowClmChains(): ReadonlyArray<ApiChain> {
  return chainsWithClms;
}

export function getCowClms(chainId: ApiChain): ReadonlyArray<CowClm> {
  return chainToClms[chainId] || [];
}

export function getAllCowClmsByChain() {
  return chainToClms;
}
