'use client'
import styled from 'styled-components'

export const LandingPage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100vh;
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
  position: relative;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    font-size: 9rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: ${({ theme }) => theme.spacings.huge};
  }
  h2 {
    font-size: 9rem;
    color: ${({ theme }) => theme.colors.golden};
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.spacings.medium};
  }
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
`

export const LandingPageImg = styled.section`
  background-image: url('lpimg.jpg');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  position: relative;
`
