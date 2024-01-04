'use client'
import styled from 'styled-components'

export const Button = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.golden};
  padding: ${({ theme }) => theme.spacings.xsmall}
    ${({ theme }) => theme.spacings.small};
  ${({ theme }) => theme.spacings.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 20%;
  min-width: fit-content;
  cursor: pointer;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.font.sizes.medium};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.golden};
    transition: 0.5s ease;
  }
`
