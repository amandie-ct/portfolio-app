'use client'
import styled from 'styled-components'

export const Menu = styled.section`
  top: 0;
  position: fixed;
  background: ${({ theme }) => theme.colors.grayish_purple};
  width: 100%;
  display: flex;
  padding: 1.5rem 2rem;
  box-shadow: ${({ theme }) => theme.shadow.box_shadow};
`

export const Links = styled.section`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  color: rgba(255, 255, 255, 0.6);
  font-size: 2.5rem;
  a {
    text-decoration: none;
    text-transform: uppercase;
    padding: 0 2rem;

    &:hover {
      color: rgba(255, 255, 255, 0.9);
      cursor: pointer;
    }

    &:visited {
      color: ${({ theme }) => theme.colors.faded_white2};
    }
  }
`
