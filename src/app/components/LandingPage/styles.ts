'use client'
import styled from 'styled-components'

export const LandingPage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #44281a;
  background-image: url('/background.jpg');
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Profile = styled.section`
  background-image: url('/profile2.jpg');
  width: 400px;

  &:after {
    content: '';
    border-top-left-radius: 50% 100%;
    border-top-right-radius: 50% 100%;
    position: absolute;
    bottom: 0;
    z-index: -1;
    width: 100%;
    background-color: #0f0f10;
    height: 85%;
  }
`
