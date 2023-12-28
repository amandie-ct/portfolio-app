'use client'
import styled from 'styled-components'

export const Menu = styled.section`
  background-color: rgba(220, 108, 58, 0.8);
  position: relative;
  display: flex;
  padding: 1.5rem 2rem;
  box-shadow: 2px 2px 10px rgba(68, 68, 68, 0.3);
`

export const Links = styled.section`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  color: rgba(255, 255, 255, 0.6);
  font-size: 2.5rem;
  a {
    text-transform: uppercase;
    padding: 0 2rem;

    &:hover {
      color: rgba(255, 255, 255, 0.9);
    }
  }
`
