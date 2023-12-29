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
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    padding: 0 3rem;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    
    &:hover {
      transform: scale(1.1, 1.1);
      transition: ${({ theme }) => theme.transition.fast};
      color: ${({ theme }) => theme.colors.white};
      cursor: pointer;
    }

    &:active {
      translateY(-1.2rem);
      transition: 0.2s;
      transform: scale(0.9, 0.9);
      color: ${({ theme }) => theme.colors.faded_white};
    }
  }
`
export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: ${({ theme }) => theme.font.sizes.huge};
  color: rgba(255, 255, 255, 0.4);

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`
