'use client'
import styled from 'styled-components'

export const Menu = styled.section`
  top: 0;
  position: fixed;
  z-index: 99;
  background: ${({ theme }) => theme.colors.dark_gray};
  width: 100%;
  display: flex;
  padding: 2.5rem 2rem;
`

export const Links = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 40%;
  font-size: 2.5rem;
  a {
    color: ${({ theme }) => theme.colors.golden};
    text-decoration: none;
    padding: 0 2rem;

    &:link {
      color: ${({ theme }) => theme.colors.golden};
    }

    &:visited {
      color: ${({ theme }) => theme.colors.golden};
    }

    &:hover {
      color: rgba(255, 255, 255, 0.9);
      cursor: pointer;
    }
  }
`
