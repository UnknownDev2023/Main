import React from 'react'
import { ApeSwapRoundIcon, Flex, Text, useMatchBreakpoints } from '@apeswapfinance/uikit'
import { useTranslation } from 'contexts/Localization'
import { BuyBanana, ContentContainer, HeadingText, LearnMore } from './styles'
import copy from '../News/copy.png'



const WelcomeContent: React.FC = () => {
  const { isSm, isXs } = useMatchBreakpoints()
  const { t } = useTranslation()
  const isMobile = isSm || isXs

  return (
    <Flex justifyContent="center" alignItems="center" style={{ width: '100%' }}>
      <ContentContainer>
        <Flex flexDirection="column" style={{ maxWidth: '740px', fontSize:'6px' }}>
          <HeadingText>The truly decentralized yield aggregating platform</HeadingText>
          {!isMobile && (
            <>
              <br />
              <br />
              <Text>
                {t(
                  'Whether you are new to crypto or you are a DeFi veteran, CosmicX has the tools, community, and connections to support your decentralized finance needs.',
                )}
              </Text>
            </>
          )}
          <br />
          <br />
          <Flex>
            {isMobile ? (
              <Flex justifyContent="center" alignItems="center" flexDirection="column" style={{ width: '100%' }}>
                <a href="/swap" rel="noopener noreferrer" style={{ width: '90%' }}>
                  <BuyBanana fullWidth>
                    Whitepaper
                    
                  </BuyBanana>
                </a>
                <a
                  href="https://cosmicx.gitbook.io/apeswap-finance/welcome/master"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: '90%' }}
                >
                  <LearnMore>{t('Learn More')}</LearnMore>
                </a>
              </Flex>
            ) : (
              <Flex justifyContent="space-between" style={{ width: 'auto' }}>
                <a href="/swap" rel="noopener noreferrer">
                  <BuyBanana>
                  Whitepaper
                    
                  </BuyBanana>
                </a>
                <a
                  href="https://cosmicx.gitbook.io/apeswap-finance/welcome/master"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LearnMore>{t('Learn More')}</LearnMore>
                </a>
              </Flex>
            )}
          </Flex>
        </Flex>
        <Flex flexDirection="column">
          <div style={{background:"rgba(0,0,0, .55)", width:"600px", height:"500px", padding:"30px 20px 20px 20px", textAlign:"center"}}>
              <h1 style={{fontSize:"26px", textTransform:"uppercase", lineHeight:"30px"}}>Private Sale</h1>
              <p style={{lineHeight:"30px"}}>Token Address</p>
              <p style={{lineHeight:"20px", fontSize:"14px"}}><button className='addrbtn' style={{cursor:"pointer",background: "transparent", color: "#ffffff", border:"0px", fontSize:"18px"}} onClick={() =>  navigator.clipboard.writeText('0xff8C479134A18918059493243943150776cF8CF2')}
>0xff8C479134A18918059493243943150776cF8CF2 <img style={{width: "24px", top:"6px", position:"relative"}} src={copy}/></button></p>
              <p style={{ marginTop:"30px",lineHeight:"30px"}}>Available Amount : 10,000,000 COSMIC</p>
              <p style={{lineHeight:"30px"}}>1 COSMIC = 0.03 BUSD</p>
              <span style={{background: "#424242", width: "100%", position: "relative", overflow: "hidden", display: "block", borderRadius:"0px"}}>
              <span style={{transform:"translateX(-98%)", background:"linear-gradient(90deg, #2735FD, #50D1F8 15%, #C29632 40%, #2DB600 55%,#FD813D 75%, #FB3B78 85%,#2A7E90)", width:"100%", height:"30px", display: "block", borderRadius:"0px", lineHeight:"30px"}}></span>
            </span>
            
          </div>
        </Flex>

        {/*
         Will be added later
         {!isMobile && (
          <Flex alignItems="center" justifyContent="center" paddingBottom="100px">
            <Spinner size={400} />
          </Flex>
        )} */}
      </ContentContainer>
    </Flex>
  )
}

export default React.memo(WelcomeContent)
