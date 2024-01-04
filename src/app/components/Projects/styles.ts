'use client'
import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.sizes.large};
  width: 100%;
  min-height: 100vh;
`
export const ContainerTitle = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacings.xlarge};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.sizes.huge};
`

export const ProjectsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.spacings.xlarge};
`
