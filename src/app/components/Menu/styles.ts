'use client'
import styled from 'styled-components'

export const Menu = styled.section`
  top: 0;
  background: rgb(130, 169, 191);
  background: linear-gradient(
    90deg,
    rgba(130, 169, 191, 0.9) 0%,
    rgba(180, 203, 216, 0.2) 100%
  );
  width: 100%;
  display: flex;
  padding: 1.5rem 2rem;
  box-shadow: 2px 2px 6px rgba(68, 68, 68, 0.2);
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
