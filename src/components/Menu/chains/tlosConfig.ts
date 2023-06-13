import { MenuEntry } from '@ape.swap/uikit'
import { ContextApi } from '../../../contexts/Localization/types'

const tlosConfig: (t: ContextApi['t']) => MenuEntry[] = (t) => [
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
        href: '/zap',
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
    label: t('Farms'),
    href: '/farms',
    isNew: false,
  },
  {
    label: t('Bills'),
    href: '/certificates',
    isNew: false,
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
        isNew: false,
      },
      {
        label: t('Charts'),
        href: '/info',
        isNew: false,
      },
      {
        label: t('Governance'),
        href: 'https://discuss.cosmicx.finance',
        isNew: false,
      },
      {
        label: t('Newsletter'),
        href: '?modal=newsletter',
        isNew: true,
      },
    ],
  },
]

export default tlosConfig
