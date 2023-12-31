import React from 'react'
import { useTranslation } from 'contexts/Localization'
import { ContextApi } from 'contexts/Localization/types'
import FaqDropdown from './FaqDropdown'
import { LaunchPadInfoWrapper, StyledHeader, StyledText, MoreInfo, FaqLink } from './styles'

const listOfFaqs: (t: ContextApi['t']) => any[] = (t) => [
  {
    title: t('How to Create an SS-IAO'),
    description: (
      <>
        {t('Read the')}{' '}
        <FaqLink
          href="https://cosmicx.gitbook.io/apeswap-finance/product-information/self-serve-iaos-ss-iaos/how-to-create-an-ss-iao"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('documentation')}
        </FaqLink>{' '}
        {t(
          'before you begin to make sure you understand how SS-IAOs work, what you should have in place before create your presale, and the associated risks.',
        )}
      </>
    ),
  },
  {
    title: t('SS-IAO Best Practices'),
    description: (
      <>
        {t(
          'Looking for tips on what the best projects do? Or want to quickly gain support from CosmicX post launch? Read',
        )}{' '}
        <FaqLink
          href="https://ape-swap.medium.com/self-serve-iaos-best-practices-on-how-to-attract-apes-9610b370b448"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('our guide')}
        </FaqLink>{' '}
        {t('from our own due diligence expert Alpha Rho.')}
      </>
    ),
  },
  {
    title: t('FAQ'),
    description: (
      <>
        {t('Have any other burning questions about SS-IAOs? Check out our')}{' '}
        <FaqLink
          href="https://cosmicx.gitbook.io/apeswap-finance/product-information/self-serve-iaos-ss-iaos/ss-iao-faq"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('FAQ')}
        </FaqLink>{' '}
        {t('to get all the answers!')}
      </>
    ),
  },
]

export default function LuanchpadInfo(): JSX.Element {
  const { t } = useTranslation()
  return (
    <LaunchPadInfoWrapper>
      <StyledHeader>{t('Self-Serve Launchpad Info')}</StyledHeader>
      <StyledText>
        {t(
          'Run your own decentralized Self-Serve Initial Ape Offering (SS-IAO) to raise funds and liquidity for your project!',
        )}
      </StyledText>

      {listOfFaqs(t).map((faq) => (
        <FaqDropdown key={faq.title} title={faq.title}>
          {faq.description}
        </FaqDropdown>
      ))}
      <MoreInfo
        href="https://cosmicx.gitbook.io/apeswap-finance/product-information/self-serve-iaos-ss-iaos"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('DOCUMENTATION')} {'>'}
      </MoreInfo>
    </LaunchPadInfoWrapper>
  )
}
