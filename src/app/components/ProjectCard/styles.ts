'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const CardContainer = styled.section`
  width: 90%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
  height: 50vh;
  display: flex;
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.spacings.xxlarge};
  width: 60%;
  height: auto;
  h2 {
    color: ${({ theme }) => theme.colors.golden};
  }

  p {
    color: ${({ theme }) => theme.colors.medium_gray};
  }
`

export const CardImg = styled.img`
  width: 40%;
  height: 100%;
  cursor: pointer;
  &:hover {
    transform: scale(1.1, 1.1);
  }
`

export const CardLinks = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.light_gray};
  font-size: ${({ theme }) => theme.font.sizes.medium};
  a {
    display: flex;
    align-items: center;
    cursor: pointer;

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

  &:hover {
    cursor: pointer;
  }
`
