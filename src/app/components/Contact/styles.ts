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

  a {
    display: flex;
    flex-direction: column;

    &:hover {
      transform: scale(2, 0.5);
    }
  }
`
