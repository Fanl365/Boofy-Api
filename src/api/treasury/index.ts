import type { Context } from 'koa';
import { getBoofyTreasury } from './getTreasury.ts';

export const getTreasury = (ctx: Context) => {
  const chainTokens = getBoofyTreasury();
  if (chainTokens) {
    ctx.status = 200;
    ctx.body = chainTokens;
  } else {
    ctx.status = 500;
    ctx.body = 'Not available yet';
  }
};
