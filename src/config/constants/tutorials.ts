import { ChainId } from '@ape.swap/sdk'

export const MetamaskLinks = {
  [ChainId.BSC]: 'https://docs.bnbchain.org/docs/wallet/metamask/',
  [ChainId.MATIC]: 'https://wiki.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/',
  [ChainId.MAINNET]: 'https://metamask.io/faqs/',
  [ChainId.TLOS]: 'https://decentralizedcreator.com/add-telos-evm-network-to-metamask/',
}

export const routeNames: Record<
  | '/'
  | '/space-farms'
  | '/banana-farms'
  | '/farms'
  | '/swap'
  | '/pools'
  | '/maximizers'
  | '/add'
  | '/add-liquidity'
  | '/liquidity'
  | '/zap'
  | '/migrate'
  | '/find'
  | '/remove'
  | '/limit-orders'
  | '/iao'
  | '/cosmicx'
  | '/certificates'
  | '/nft'
  | '/auction'
  | '/staking'
  | '/stats'
  | '/protocol-dashboard'
  | '/the-migration',
  string
> = {
  '/': 'HOME',
  '/space-farms': 'JUNGLE_FARMS',
  '/banana-farms': 'FARMS',
  '/farms': 'FARMS',
  '/swap': 'SWAP',
  '/pools': 'POOLS',
  '/maximizers': 'MAXIMIZERS_VAULTS',
  '/add': 'ADD_LIQUIDITY',
  '/add-liquidity': 'ADD_LIQUIDITY',
  '/liquidity': 'LIQUIDITY',
  '/zap': 'LIQUIDITY',
  '/migrate': 'LIQUIDITY',
  '/find': 'LIQUIDITY',
  '/remove': 'LIQUIDITY',
  '/limit-orders': 'ORDERS',
  '/iao': 'IAO',
  '/cosmicx': 'COSMICX',
  '/certificates': 'TREASURY_BILL',
  '/nft': 'NFT',
  '/auction': 'AUCTION',
  '/staking': 'STAKING',
  '/stats': 'APESTATS',
  '/protocol-dashboard': 'PROTOCOL_DASHBOARD',
  '/the-migration': 'THE_MIGRATION',
}

export enum Farms {
  BNB = 'bnb-chain-farms',
  Polygon = 'polygon-farms',
  Ethereum = '',
  Telos = 'telos-farms',
}

export const DOC_LINKS = {
  HOME: 'https://cosmicx.gitbook.io/apeswap-finance/welcome/master',
  JUNGLE_FARMS: 'https://cosmicx.gitbook.io/apeswap-finance/product-and-features/stake/farms/',
  FARMS: `https://cosmicx.gitbook.io/apeswap-finance/product-and-features/stake/farms/`,
  SWAP: 'https://cosmicx.gitbook.io/apeswap-finance/product-and-features/exchange/swap',
  POOLS: 'https://cosmicx.gitbook.io/apeswap-finance/product-and-features/stake/pools',
  MAXIMIZERS_VAULTS: 'https://cosmicx.gitbook.io/apeswap-finance/product-and-features/stake/vaults',
  ADD_LIQUIDITY:
    'https://cosmicx.gitbook.io/apeswap-finance/product-and-features/exchange/liquidity/how-to-add-liquidity',
  LIQUIDITY: 'https://cosmicx.gitbook.io/apeswap-finance/product-and-features/exchange/liquidity',
  ORDERS: 'https://cosmicx.gitbook.io/apeswap-finance/product-and-features/exchange/limit-orders',
  IAO: 'https://cosmicx.gitbook.io/apeswap-finance/product-and-features/raise/initial-ape-offerings-iaos',
  COSMICX: 'https://cosmicx.gitbook.io/apeswap-finance/welcome/apeswap-tokens/cosmicx',
  TREASURY_BILL: 'https://cosmicx.gitbook.io/apeswap-finance/product-and-features/raise/certificates',
  NFT: 'https://cosmicx.gitbook.io/apeswap-finance/product-and-features/collect/non-fungible-apes-nfas',
  AUCTION:
    'https://cosmicx.gitbook.io/apeswap-finance/product-and-features/collect/non-fungible-apes-nfas/nfa-auction-house',
  STAKING: 'https://cosmicx.gitbook.io/apeswap-finance/product-and-features/stake',
  APESTATS: 'https://cosmicx.gitbook.io/apeswap-finance/product-and-features/stats',
  PROTOCOL_DASHBOARD: 'https://cosmicx.gitbook.io/apeswap-finance/product-and-features/protocol-dashboard',
  THE_MIGRATION: 'https://cosmicx.gitbook.io/apeswap-finance/product-and-features/stake/hard-cap-migration-masterapev2',
}
