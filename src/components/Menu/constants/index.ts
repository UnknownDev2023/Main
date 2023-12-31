import { ContextApi } from 'contexts/Localization/types'
import { MenuEntry } from '@apeswapfinance/uikit'

export const HOME: (t: ContextApi['t']) => MenuEntry = (t) => ({
  label: t('Home'),
  href: '/',
})

export const EXCHANGE: (t: ContextApi['t']) => MenuEntry = (t) => ({
  label: t('Exchange'),
  href: '/swap',
})

export const MORE_INFO: (t: ContextApi['t']) => MenuEntry = (t) => ({
  label: t('More'),
  lightIcon: 'MoreLightImage',
  darkIcon: 'MoreDarkImage',
  items: [
    {
      label: t('Protocol Dashboard'),
      href: 'protocol-dashboard',
    },
    {
      label: t('Documentation'),
      href: 'https://cosmicx.gitbook.io/apeswap-finance/',
    },
    {
      label: t('Charts'),
      href: 'https://cosmicx.gitbook.io/apeswap-finance/',
    },
    {
      label: t('Governance'),
      href: 'https://discuss.cosmicx.finance',
    },
  ],
})
