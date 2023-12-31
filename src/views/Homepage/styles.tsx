import styled from 'styled-components'
import { keyframes } from '@emotion/react'

export const FadeIn = keyframes({
  '0%': { opacity: 0.5 },
  '100%': { opacity: 1 },
})

export const FadeOut = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

export const Banner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  height: 788px;
  width: 100%;
  background-image: ${({ theme }) => (theme.isDark ? 'url(images/banner-night.png)' : 'url()')};
  background-size: cover;
  background-repeat: no-repeat;
`
