'use client'
import styled from 'styled-components'

export const LandingPage = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100vh;
  background: rgb(244, 118, 171);
  background: linear-gradient(
    90deg,
    rgba(244, 118, 171, 1) 0%,
    rgba(212, 167, 199, 1) 47%,
    rgba(171, 213, 235, 1) 100%
  );
  z-index: -2;
`

export const Identification = styled.section`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 8rem;
    color: rgba(255, 255, 255, 0.9);
  }
  h2 {
    font-size: 7rem;
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
  }
`

export const Profile = styled.section`
  img {
    object-fit: fill;
    width: 400px;
    height: auto;
  }

  &:after {
    content: '';
    left: -100px;
    border-top-left-radius: 50% 100%;
    border-top-right-radius: 50% 100%;
    position: absolute;
    bottom: 0;
    width: 40%;
    z-index: -1;
    background-color: rgba(247, 119, 15, 0.1);
    height: 45%;
  }
`
