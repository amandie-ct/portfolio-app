'use client'
import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
`

export const ContactsList = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 15px;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 3rem;
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;

    p {
      font-size: 2rem;
    }

    &:hover {
      transform: scale(1.1, 1.1);
      transition: 0.3s;
      color: #fff;
      cursor: pointer;
    }

    &:active {
      translateY(-1.2rem);
      transition: 0.2s;
      transform: scale(0.9, 0.9);
    color: rgba(255, 255, 255, 0.7);
    }
  }
`
