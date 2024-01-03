'use client'
import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacings.xxlarge};
  background-color: ${({ theme }) => theme.colors.dark_gray};
`
