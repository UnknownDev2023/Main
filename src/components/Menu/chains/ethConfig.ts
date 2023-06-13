import { MenuEntry } from '@apeswapfinance/uikit'
import { ContextApi } from '../../../contexts/Localization/types'

const maticConfig: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Exchange'),
    lightIcon: 'ExchangeLightImage',
    darkIcon: 'ExchangeDarkImage',
    items: [
      {
        label: t('Swap'),
        href: '/swap',
        isNew: false,
      },
      {
        label: t('Liquidity'),
        href: '/add-liquidity',
        isNew: false,
      },
      {
        label: t('Pro Trading'),
        href: 'https://pro.cosmicx.finance',
        isNew: false,
      },
    ],
  },
  {
    label: t('Explore'),
    lightIcon: 'MoreLightImage',
    darkIcon: 'MoreDarkImage',
    items: [
      {
        label: t('ApeStats'),
        href: '/stats',
        isNew: false,
      },
      {
        label: t('Dashboard'),
        href: 'protocol-dashboard',
        isNew: false,
      },
      {
        label: t('Documentation'),
        href: 'https://cosmicx.gitbook.io/apeswap-finance/',
      },
      {
        label: t('Charts'),
        href: '/info',
      },
      {
        label: t('Governance'),
        href: 'https://discuss.cosmicx.finance',
      },
      {
        label: t('Newsletter'),
        href: '?modal=newsletter',
        isNew: true,
      },
    ],
  },
  //   {
  //     label: t('Pools'),
  //     icon: 'PoolIcon',
  //     href: '/pools',
  //   },
  //   {
  //     label: t('IAO'),
  //     icon: 'IfoIcon',
  //     href: '/iao',
  //   },
  //   {
  //     label: t('COSMICX'),
  //     icon: 'ApeZone',
  //     href: '/cosmicx',
  //   },
]

export default maticConfig
