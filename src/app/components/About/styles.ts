'use client'
import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
`
export const ContainerTitle = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacings.xlarge};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.sizes.huge};
`
