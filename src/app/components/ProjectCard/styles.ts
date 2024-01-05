'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const CardContainer = styled.section`
  width: 90%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
  height: 60vh;
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacings.huge};
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 100%;

  margin: ${({ theme }) => theme.spacings.large};
  width: 60%;
  h2 {
    color: ${({ theme }) => theme.colors.golden};
    font-weight: 500;
  }

  p {
    color: ${({ theme }) => theme.colors.medium_gray};
    font-size: ${({ theme }) => theme.font.sizes.small};
    text-align: justify;
  }

  a {
    color: ${({ theme }) => theme.colors.golden};
    font-weight: bold;
    text-decoration: none;
  }
`

export const CardImg = styled.img`
  width: 50%;
  height: 100%;
  cursor: pointer;
  object-fit: cover;
  &:hover {
    transform: scale(1.05, 1.05);
    transition: 0.5s ease;
  }
`

export const CardLinks = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: right;
  color: ${({ theme }) => theme.colors.light_gray};
  font-size: ${({ theme }) => theme.font.sizes.small};
  a {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-right: ${({ theme }) => theme.spacings.small};
    text-decoration: none;
    &:last-child {
      margin-right: 0;
    }

    span {
      color: ${({ theme }) => theme.colors.light_gray};
      &:hover {
        border-bottom: 2px solid ${({ theme }) => theme.colors.light_gray};
      }
    }
  }
`

export const CardLinksIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.light_gray};
`

export const CardTechsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

export const CardTechButton = styled.div`
  color: ${({ theme }) => theme.colors.golden};
  font-size: ${({ theme }) => theme.font.sizes.small};
  font-weight: bold;
  padding: ${({ theme }) => theme.spacings.xxsmall}
    ${({ theme }) => theme.spacings.xsmall};
  border: 2px solid ${({ theme }) => theme.colors.golden};
  min-width: fit-content;
  max-width: 15%;
  margin-right: ${({ theme }) => theme.spacings.xsmall};
  margin-bottom: ${({ theme }) => theme.spacings.xsmall};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.golden};
    color: ${({ theme }) => theme.colors.white};
    transition: 0.5s ease;
  }
`
