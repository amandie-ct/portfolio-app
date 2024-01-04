'use client'
import styled from 'styled-components'

export const LandingPage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 90vh;
`
export const IdentificationContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const Identification = styled.section`
  display: flex;
  width: 100%;
  align-items: flex-end;
  margin-right: ${({ theme }) => theme.spacings.large};
  flex-direction: column;
  h1 {
    font-size: 7rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: ${({ theme }) => theme.spacings.huge};
  }
  h2 {
    font-size: 6rem;
    color: ${({ theme }) => theme.colors.golden};
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.spacings.xlarge};
  }
`

export const LandingPageImg = styled.section`
  img {
    object-fit: fill;
    width: 80%;
    height: auto;
  }
`
