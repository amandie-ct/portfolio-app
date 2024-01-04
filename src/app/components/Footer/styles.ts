'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const Footer = styled.section`
  display: flex;
  flex-direction: column;
  height: 30vh;
  width: 100%;
`

export const ContainerTitle = styled.h1`
  color: ${({ theme }) => theme.colors.golden};
  font-size: ${({ theme }) => theme.font.sizes.large};
`

export const FooterLinks = styled.div`
  padding-top: ${({ theme }) => theme.spacings.medium};
  width: 100%;
  display: flex;
  justify-content: flex-start;
  a {
    display: flex;
    align-items: center;
    justify-content: space-between; 
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    margin-right: ${({ theme }) => theme.spacings.large};
    
    &:hover {
      cursor: pointer;
    }


    p {
      font-size: ${({ theme }) => theme.font.sizes.medium};
      padding: ${({ theme }) => theme.spacings.xsmall} 0;
      color: ${({ theme }) => theme.colors.light_gray};

    }

    &:active {
      translateY(-1.2rem);
      transition: 0.2s;
    }
  }
`

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: ${({ theme }) => theme.font.sizes.large};
  margin-right: ${({ theme }) => theme.spacings.xxsmall};
  color: rgba(255, 255, 255, 0.5);

  &:hover {
    color: ${({ theme }) => theme.colors.golden};
    transition: ${({ theme }) => theme.transition.fast};
  }
`
