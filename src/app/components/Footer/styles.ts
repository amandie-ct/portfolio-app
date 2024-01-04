'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const Footer = styled.section`
  display: flex;
  flex-direction: column;
  height: 30vh;
  width: 100%;

  h1 {
    font-size: ${({ theme }) => theme.font.sizes.large};
    color: ${({ theme }) => theme.colors.golden};
  }
`

export const FooterLinks = styled.div`
  padding-top: ${({ theme }) => theme.spacings.xxlarge};
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; 
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    margin-right: ${({ theme }) => theme.spacings.xlarge};
    
    &:hover {
      transform: scale(1.2, 1.2);
      transition: ${({ theme }) => theme.transition.fast};
      color: ${({ theme }) => theme.colors.white};
      cursor: pointer;
    }


    p {
      font-size: ${({ theme }) => theme.font.sizes.small};
      padding: ${({ theme }) => theme.spacings.xsmall} 0;
      color: ${({ theme }) => theme.colors.light_gray};

    }

    &:active {
      translateY(-1.2rem);
      transition: 0.2s;
      color: ${({ theme }) => theme.colors.faded_white1};
    }
  }
`

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: ${({ theme }) => theme.font.sizes.xlarge};
  color: ${({ theme }) => theme.colors.faded_golden};

  &:hover {
    color: ${({ theme }) => theme.colors.golden};
    transition: ${({ theme }) => theme.transition.fast};
  }
`
