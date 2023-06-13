import React, { useEffect, useState } from 'react'
import { Flex, Text, useMatchBreakpoints, Skeleton } from '@apeswapfinance/uikit'
import CountUp from 'react-countup'
import { useTheme } from 'styled-components'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import { useFetchHomepageStats, useHomepageStats } from 'state/hooks'
import { useTranslation } from 'contexts/Localization'
import { StyledCard, CardWrapper } from './styles'
import { statsData } from './statsData'

const StatCards: React.FC = () => {
  const { isSm, isXs } = useMatchBreakpoints()
  const [loadStats, setLoadStats] = useState(false)
  const isMobile = isSm || isXs
  const { observerRef, isIntersecting } = useIntersectionObserver()
  const { t } = useTranslation()
  useFetchHomepageStats(loadStats)
  const rawStats = useHomepageStats()
  const theme = useTheme()
  const stats = statsData(t).map((stat) => {
    return { ...stat, value: rawStats ? rawStats[stat.id] : null }
  })

  useEffect(() => {
    if (isIntersecting) {
      setLoadStats(true)
    }
  }, [isIntersecting])

  return (
    <>
      <div/>
      <Flex alignItems="center" justifyContent="center" style={{ width: '100%' }}>
        <CardWrapper>
          
              <StyledCard >
                
                <Flex justifyContent="center" alignItems="center" style={{ width: '100%' }}>
                  <Text style={{ lineHeight: '20px', textAlign: 'center' }}>Private Sale</Text>
                </Flex>
                <Flex justifyContent="center" alignItems="center" style={{ width: '100%', fontSize:'24px' }}>
                  25.06.2023
                </Flex>
              </StyledCard>

              <StyledCard >
                
                <Flex justifyContent="center" alignItems="center" style={{ width: '100%' }}>
                  <Text style={{ lineHeight: '20px', textAlign: 'center' }}>Public Sale Round 1</Text>
                </Flex>
                <Flex justifyContent="center" alignItems="center" style={{ width: '100%', fontSize:'24px' }}>
                  16.07.2023
                </Flex>
              </StyledCard>

              <StyledCard >
                
                <Flex justifyContent="center" alignItems="center" style={{ width: '100%' }}>
                  <Text style={{ lineHeight: '20px', textAlign: 'center' }}>Public Sale Round 2</Text>
                </Flex>
                <Flex justifyContent="center" alignItems="center" style={{ width: '100%', fontSize:'24px' }}>
                  30.07.2023
                </Flex>
              </StyledCard>

              <StyledCard >
                
                <Flex justifyContent="center" alignItems="center" style={{ width: '100%' }}>
                  <Text style={{ lineHeight: '20px', textAlign: 'center' }}>Public Sale Round 3</Text>
                </Flex>
                <Flex justifyContent="center" alignItems="center" style={{ width: '100%', fontSize:'24px' }}>
                  20.08.2023
                </Flex>
              </StyledCard>
       
        </CardWrapper>
      </Flex>
    </>
  )
}

export default React.memo(StatCards)
