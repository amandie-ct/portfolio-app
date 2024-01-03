'use client'
import styled from 'styled-components'

export const Button = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.golden};
  padding: ${({ theme }) => theme.spacings.small}
    ${({ theme }) => theme.spacings.medium};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.sizes.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 20%;
  min-width: fit-content;
`
