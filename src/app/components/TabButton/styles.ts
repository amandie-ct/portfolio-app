'use client'
import styled from 'styled-components'

export const TabButton = styled.div`
  color: ${({ theme }) => theme.colors.light_gray};
  text-decoration: none;
  padding-bottom: 0.5rem;
  box-sizing: border-box;
  font-weight: 400;
  margin-right: ${({ theme }) => theme.spacings.large};

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.golden};
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    font-weight: 500;
  }
`
