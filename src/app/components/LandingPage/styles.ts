'use client'
import styled from 'styled-components'

export const LandingPage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`

export const Identification = styled.section`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 8rem;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 200;
  }
  h2 {
    font-size: 8rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
    font-weight: 600;
  }
`

export const IdentificationContainer = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-around;
`

export const Profile = styled.section`
  img {
    object-fit: fill;
    width: 350px;
    height: auto;
  }
`
