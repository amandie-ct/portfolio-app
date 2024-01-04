'use client'
import styled from 'styled-components'

export const Menu = styled.section`
  top: 0;
  position: fixed;
  z-index: 99;
  background: ${({ theme }) => theme.colors.dark_gray};
  width: 100%;
  display: flex;
  padding: 1.5rem 2rem;
`

export const Links = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 40%;
  font-size: 2.5rem;

  a {
    color: ${({ theme }) => theme.colors.light_gray};
    text-decoration: none;
    padding: 0.5rem 0;
    box-sizing: border-box;
    font-weight: 400;

    &:link {
      color: ${({ theme }) => theme.colors.light_gray};
    }

    &:visited {
      color: ${({ theme }) => theme.colors.light_gray};
    }

    &:hover {
      border-bottom: 2px solid ${({ theme }) => theme.colors.golden};
      color: ${({ theme }) => theme.colors.white};
      cursor: pointer;
      font-weight: 500;
    }
  }
`
