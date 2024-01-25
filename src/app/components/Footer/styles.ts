'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const Footer = styled.section`
  display: flex;
  flex-direction: column;
  min-height: fit-content;
  height: 30vh;
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacings.medium};
`

export const ContainerTitle = styled.h1`
  margin-top: ${({ theme }) => theme.spacings.medium};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.sizes.huge};
  font-weight: 500;
`

export const FooterLinksContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`

export const FooterLinks = styled.div`
  padding-top: ${({ theme }) => theme.spacings.medium};
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: ${({ theme }) => theme.spacings.xlarge};

  a {
    display: flex;
    align-items: center;
    justify-content: space-between; 
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    margin-right: ${({ theme }) => theme.spacings.large};
    
    p {
      font-size: ${({ theme }) => theme.font.sizes.medium};
      color: ${({ theme }) => theme.colors.light_gray};
      padding-bottom: ${({ theme }) => theme.spacings.xxsmall};

      &:hover {
        cursor: pointer;
        border-bottom: 2px solid ${({ theme }) => theme.colors.golden};
        color: ${({ theme }) => theme.colors.white};

    }

    &:active {
      translateY(-1.2rem);
      transition: 0.2s;
    }
      
    }
  }
`

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: ${({ theme }) => theme.font.sizes.large};
  margin-right: ${({ theme }) => theme.spacings.xxsmall};
  color: ${({ theme }) => theme.colors.golden};
  padding-bottom: ${({ theme }) => theme.spacings.xxsmall};
`

export const PortfolioLink = styled(FooterLinks)`
  font-size: ${({ theme }) => theme.font.sizes.medium};
  color: ${({ theme }) => theme.colors.light_gray};
  justify-content: flex-end;

  a {
    &:hover {
      color: ${({ theme }) => theme.colors.golden};
    }
  }
`
