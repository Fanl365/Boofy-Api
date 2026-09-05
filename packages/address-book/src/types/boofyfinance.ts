export interface BoofyFinance {
  devMultisig: string;
  treasuryMultisig: string;
  strategyOwner: string;
  vaultOwner: string;
  tokenManager?: string;
  tokenOwner?: string;
  keeper: string;
  treasurer: string;
  launchpoolOwner: string;
  rewardPool: string;
  treasury: string;
  boofyFeeRecipient: string;
  zapFeeRecipient: string;
  multicall: string;
  bifiMaxiStrategy?: string;
  voter: string;
  boofyFeeConfig?: string;
  vaultFactory?: string;
  legacyStrategyFactory?: string;
  zap?: string;
  zapTokenManager?: string;
  treasurySwapper?: string;
  assetSwapper?: string;

  /// BIFI Token Contracts
  mooBifiLockbox?: string;
  axelarBridge?: string;
  optimismBridge?: string;
  ccipBridge?: string;
  layerZeroBridge?: string;
  mooBifi4626?: string;

  /// CLM Contracts
  clmFactory?: string;
  clmStrategyFactory?: string;
  clmRewardPoolFactory?: string;
  positionMulticall?: string;

  /// Boofy Swapper Contracts
  boofySwapper?: string;
  boofyOracle?: string;
  boofyOracleChainlink?: string;
  boofyOracleChainlinkEthBase?: string;
  boofyOracleUniswapV3?: string;
  boofyOracleUniswapV2?: string;
  boofyOracleSolidly?: string;
  boofyOracleAlgebra?: string;
  boofyMultiHopSwapper?: string;
  boofyUniV4Swapper?: string;

  /// Cross-Chain Contracts
  circleBoofyReceiver?: string;
  swappingRelay?: string;
  recovery?: string;
}
