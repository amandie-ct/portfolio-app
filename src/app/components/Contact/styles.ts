'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;

  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.sizes.large};
`

export const ContactsList = styled.section`
  padding-top: ${({ theme }) => theme.spacings.large};
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
      color: ${({ theme }) => theme.colors.faded_white1};

    }

    &:active {
      translateY(-1.2rem);
      transition: 0.2s;
      color: ${({ theme }) => theme.colors.faded_white1};
    }
  }
`
export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: ${({ theme }) => theme.font.sizes.huge};
  color: ${({ theme }) => theme.colors.faded_white3};

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    transition: ${({ theme }) => theme.transition.fast};
  }
`
