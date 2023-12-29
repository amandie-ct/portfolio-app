'use client'
import styled from 'styled-components'

export const Menu = styled.section`
  top: 0;
  background: rgba(207, 192, 190, 0.7);
  width: 100%;
  display: flex;
  padding: 1.5rem 2rem;
  box-shadow: 2px 2px 10px rgba(68, 68, 68, 0.3);
  position: absolute;
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
      cursor: pointer;
    }
  }
`
