
import { StatType } from './types'
import { ContextApi } from '../../../../contexts/Localization/types'

export const statsData: (t: ContextApi['t']) => StatType[] = (t) => [
  {
    title:'Private Sale',
    value: null,
    id: 'tvl',
  },

]
