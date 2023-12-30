'use client'
import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
`
export const ContainerTitle = styled.h1`
  font-size: ${({ theme }) => theme.font.sizes.large};
  margin-bottom: ${({ theme }) => theme.spacings.xlarge};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.faded_white1};
`
