import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Box } from 'theme-ui'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import { Swiper, SwiperSlide } from 'swiper/react'
import useSwiper from 'hooks/useSwiper'
import { orderBy } from 'lodash'
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/swiper.min.css'
import { Flex, Skeleton } from '@apeswapfinance/uikit'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useFetchHomepageNews, useHomepageNews } from 'state/hooks'
import track from 'utils/track'
import { getDotPos } from 'utils/getDotPos'
import { Bubble, NewsCard, NewsWrapper, SkeletonWrapper } from './styles'
import { Card, Text, Button, ArrowDropDownIcon } from '@apeswapfinance/uikit'
import styled from 'styled-components'
import imageone from './1.png'
import imagetwo from './2.png'
import imagethree from './3.png'
import imagefour from './4.png'
import imagefive from './5.png'
import imagesix from './6.png'
import imageseven from './7.png'
import aboutimg from './aboutimg.png'
import facebook from './facebook.png'
import telegram from './telegram.png'
import youtube from './youtube.png'
import twitter from './twitter.png'
import redit from './redit.png'
import medium from './medium.png'


const TokenomicsTitle = styled(Text)`
  font-size: 34px;
  line-height: 70px;
  font-weight: 700;
`

const TokenomicsContainer = styled(Text)`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 70px;
  margin-bottom: 70px;

  .imgopacity:hover{
    opacity: 50%;
  }
`
const TokenomicsRowLeft = styled(Text)`
  width: 48%;
  min-width: 400px;
  position: relative;
  float: left;
  margin-bottom: 30px;
`

const TokenomicsRowRight = styled(Text)`
  width: 48%;
  min-width: 400px;
  position: relative;
  float: right;
  margin-bottom: 30px;
`
const TokenomicsSub = styled(Text)`
  line-height: 30px;
`
const TokBarCont =styled(Text)`
  background: #424242;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: block;
  border-radius: 0px;
  margin-bottom : -20px;
`
const CenterRelative = styled(Text)`
  text-align: center;
  position: relative;
  flex-wrap: wrap;
`
const LineHeight = styled(Text)`
  line-height: 30px;
`
const LineHeightSize = styled(Text)`
  line-height: 30px;
  font-size: 20px;
`
const SubEcosystem = styled(Text)`
  line-height: 25px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 40px;
`
const EcosystemContainer = styled(Text)`
  width: 25%;
  min-width: 200px;
  position: relative;
  float: left;
  margin-bottom: 30px;
`

const News: React.FC = () => {
  
  return (
    <>
      <TokenomicsContainer>
          <div style={{marginLeft:"auto", marginRight:"auto", width:"420px", zIndex:"100", position:"relative"}}>
            <a href='#'><img className="imgopacity" style={{width: "50px", marginLeft:"10px", marginRight:"10px"}} src={telegram}/></a>
            <a href='#'><img className="imgopacity" style={{width: "50px", marginLeft:"10px", marginRight:"10px"}} src={twitter}/></a>
            <a href='#'><img className="imgopacity" style={{width: "50px", marginLeft:"10px", marginRight:"10px"}} src={facebook}/></a>
            <a href='#'><img className="imgopacity" style={{width: "50px", marginLeft:"10px", marginRight:"10px"}} src={youtube}/></a>
            <a href='#'><img className="imgopacity" style={{width: "50px", marginLeft:"10px", marginRight:"10px"}} src={redit}/></a>
            <a href='#'><img className="imgopacity" style={{width: "50px", marginLeft:"10px", marginRight:"10px"}} src={medium}/></a>
          </div>
            <br/><br/><br/>
          <div style={{width: "40%", minWidth:"400px", position:"relative", float:"left"}}><img style={{width: "400px", marginLeft: "auto", marginRight: "auto"}} src={aboutimg}/></div>
          <div style={{width: "60%", minWidth:"400px", position:"relative", float:"right", marginBottom:"30px"}}>
            
            <h1 style={{fontSize:"34px", lineHeight:"70px"}}>About CosmicX</h1>
            <LineHeight>Renq is a community-driven organization that is established to provide a one stop solution for all kind of traders under one platform in the DeFi world.
We aim to empower our users with a comprehensive solution by providing them a platform that has benefits of a centralized exchange and beyond.</LineHeight>
          </div>

          
        </TokenomicsContainer>
      <br style={{clear:"both"}}/>
      <TokenomicsContainer>
      <CenterRelative>
            <TokenomicsTitle>CosmicX Tokenomics</TokenomicsTitle>
            <TokenomicsContainer>
              <TokenomicsRowLeft>
                <TokenomicsSub>TOTAL TOKENS : 1,000,000,000</TokenomicsSub>
                <TokBarCont>
                  <span style={{ transition:".4s linear", transformOrigin:"left",transform:"translateX(0%)", background:"linear-gradient(90deg, #2735FD, #50D1F8 15%, #C29632 40%, #2DB600 55%,#FD813D 75%, #FB3B78 85%,#2A7E90)",width: "100%", height:"30px", display: "block", borderRadius:"0px", lineHeight:"30px"}}>1 Billion</span>
                </TokBarCont>
                  <br/><br/>
                <TokenomicsSub>PUBLIC SALE: 300,000,000</TokenomicsSub>
                <TokBarCont>
                  <span style={{transition:".4s linear", transformOrigin:"left",transform:"translateX(-70%)", background:"linear-gradient(90deg, #2735FD, #50D1F8 15%, #C29632 40%, #2DB600 55%,#FD813D 75%, #FB3B78 85%,#2A7E90)", width:"100%", height:"30px", display: "block", borderRadius:"0px", lineHeight:"30px"}}></span>
                </TokBarCont>
                  <br/><br/>
                <TokenomicsSub>COSMIC POOL : 100,000,000</TokenomicsSub>
                <TokBarCont>
                  <span style={{transition:".4s linear", transformOrigin:"left",transform:"translateX(-90%)", background:"linear-gradient(90deg, #2735FD, #50D1F8 15%, #C29632 40%, #2DB600 55%,#FD813D 75%, #FB3B78 85%,#2A7E90)", width:"100%", height:"30px", display: "block", borderRadius:"1px", lineHeight:"30px"}}></span>
                </TokBarCont>
                  <br/><br/>
                <TokenomicsSub>COSMIC VAULT : 100,000,000</TokenomicsSub>
                <TokBarCont>
                  <span style={{transition:".4s linear", transformOrigin:"left",transform:"translateX(-90%)", background:"linear-gradient(90deg, #2735FD, #50D1F8 15%, #C29632 40%, #2DB600 55%,#FD813D 75%, #FB3B78 85%,#2A7E90)", width:"100%", height:"30px", display: "block", borderRadius:"0px", lineHeight:"30px"}}></span>
                </TokBarCont>
                <br/><br/>
                <TokenomicsSub>MARKETING : 5,000,000</TokenomicsSub>
                <TokBarCont>
                  <span style={{transition:".4s linear", transformOrigin:"left",transform:"translateX(-99.5%)", background:"linear-gradient(90deg, #2735FD, #50D1F8 15%, #C29632 40%, #2DB600 55%,#FD813D 75%, #FB3B78 85%,#2A7E90)", width:"100%", height:"30px", display: "block", borderRadius:"0px", lineHeight:"30px"}}></span>
                </TokBarCont>
              </TokenomicsRowLeft>

              <TokenomicsRowRight>
                <TokenomicsSub>COSMIC FARMS : 100,000,000</TokenomicsSub>
                <TokBarCont>
                  <span style={{transition:".4s linear", transformOrigin:"left",transform:"translateX(-90%)", background:"linear-gradient(90deg, #2735FD, #50D1F8 15%, #C29632 40%, #2DB600 55%,#FD813D 75%, #FB3B78 85%,#2A7E90)", width:"100%", height:"30px", display: "block", borderRadius:"0px", lineHeight:"30px"}}></span>
                </TokBarCont>
                  <br/><br/>
                <TokenomicsSub>EXCHANGE LISTINGS : 100,000,000</TokenomicsSub>
                <TokBarCont>
                  <span style={{transition:".4s linear", transformOrigin:"left",transform:"translateX(-90%)", background:"linear-gradient(90deg, #2735FD, #50D1F8 15%, #C29632 40%, #2DB600 55%,#FD813D 75%, #FB3B78 85%,#2A7E90)", width:"100%", height:"30px", display: "block", borderRadius:"0px", lineHeight:"30px"}}></span>
                </TokBarCont>
                  <br/><br/>
                <TokenomicsSub>LIQUIDITY : 50,000,000</TokenomicsSub>
                <TokBarCont>
                  <span style={{transition:".4s linear", transformOrigin:"left",transform:"translateX(-95%)", background:"linear-gradient(90deg, #2735FD, #50D1F8 15%, #C29632 40%, #2DB600 55%,#FD813D 75%, #FB3B78 85%,#2A7E90)", width:"100%", height:"30px", display: "block", borderRadius:"0px", lineHeight:"30px"}}></span>
                </TokBarCont>
                  <br/><br/>
                <TokenomicsSub>TEAM : 40,000,000</TokenomicsSub>
                <TokBarCont>
                  <span style={{transition:".4s linear", transformOrigin:"left",transform:"translateX(-96%)", background:"linear-gradient(90deg, #2735FD, #50D1F8 15%, #C29632 40%, #2DB600 55%,#FD813D 75%, #FB3B78 85%,#2A7E90)", width:"100%", height:"30px", display: "block", borderRadius:"0px", lineHeight:"30px"}}></span>
                </TokBarCont>
                <br/><br/>
                <TokenomicsSub>PRIZE POOL : 5,000,000</TokenomicsSub>
                <TokBarCont>
                  <span style={{transition:".4s linear", transformOrigin:"left",transform:"translateX(-99.5%)", background:"linear-gradient(90deg, #2735FD, #50D1F8 15%, #C29632 40%, #2DB600 55%,#FD813D 75%, #FB3B78 85%,#2A7E90)", width:"100%", height:"30px", display: "block", borderRadius:"0px", lineHeight:"30px"}}></span>
                </TokBarCont>    
              </TokenomicsRowRight>
            </TokenomicsContainer>
            
      </CenterRelative>
      </TokenomicsContainer>
     <br style={{clear:"both"}}/>
     <TokenomicsContainer>
      <CenterRelative>
            <TokenomicsTitle>CosmicX Ecosystem</TokenomicsTitle>
            <LineHeight>Renq, an innovative multi chain non-custodial decentralized exchange, elevates decentralized trading by providing users with a direct trading option through renq's wallet app.</LineHeight>
              <br/><br/><br/><br/>
            <EcosystemContainer>
            <img style={{width: "100px"}} src={imageone}/>
            <LineHeightSize>Warp Drive</LineHeightSize>
            <SubEcosystem>Instantly analyzes thousands of quotes and fees across multiple DEXes to provide users with the best rates.</SubEcosystem>
           
          </EcosystemContainer>
          <EcosystemContainer>
            <img style={{width: "100px"}} src={imageone}/>
            <LineHeightSize>Certificates</LineHeightSize>
            <SubEcosystem>Instantly analyzes thousands of quotes and fees across multiple DEXes to provide users with the best rates.</SubEcosystem>
            
          </EcosystemContainer>
          <EcosystemContainer>
            <img style={{width: "100px"}} src={imagetwo}/>
            <LineHeightSize>Staking Pools</LineHeightSize>
            <SubEcosystem>Instantly analyzes thousands of quotes and fees across multiple DEXes to provide users with the best rates.</SubEcosystem>
            
          </EcosystemContainer>
          <EcosystemContainer>
            <img style={{width: "100px"}} src={imagethree}/>
            <LineHeightSize>Governance</LineHeightSize>
            <SubEcosystem>Instantly analyzes thousands of quotes and fees across multiple DEXes to provide users with the best rates.</SubEcosystem>
            
          </EcosystemContainer>
          <br style={{clear:"both"}}/>

          <EcosystemContainer>
            <img style={{width: "100px"}} src={imagefour}/>
            <LineHeightSize>Warp Drive</LineHeightSize>
            <SubEcosystem>Instantly analyzes thousands of quotes and fees across multiple DEXes to provide users with the best rates.</SubEcosystem>
           
          </EcosystemContainer>
          <EcosystemContainer>
            <img style={{width: "100px"}} src={imagefive}/>
            <LineHeightSize>Certificates</LineHeightSize>
            <SubEcosystem>Instantly analyzes thousands of quotes and fees across multiple DEXes to provide users with the best rates.</SubEcosystem>
            
          </EcosystemContainer>
          <EcosystemContainer>
            <img style={{width: "100px"}} src={imagesix}/>
            <LineHeightSize>Staking Pools</LineHeightSize>
            <SubEcosystem>Instantly analyzes thousands of quotes and fees across multiple DEXes to provide users with the best rates.</SubEcosystem>
            
          </EcosystemContainer>
          <EcosystemContainer>
            <img style={{width: "100px"}} src={imageseven}/>
            <LineHeightSize>Governance</LineHeightSize>
            <SubEcosystem>Instantly analyzes thousands of quotes and fees across multiple DEXes to provide users with the best rates.</SubEcosystem>
            
          </EcosystemContainer>
          
          </CenterRelative>
    </TokenomicsContainer>
     <br style={{clear:"both"}}/>
      <TokenomicsContainer>
      <CenterRelative>
            <TokenomicsTitle>Frequently Asked Question</TokenomicsTitle>
            <LineHeight>If you have any questions about our website, Here are answers to the most frequently asked questions. If you cannot find your answer below, please contact us via the contact form or at support@cosmicx.finance</LineHeight>
          </CenterRelative>
     </TokenomicsContainer>
    </>
  )
}

export default React.memo(News)
