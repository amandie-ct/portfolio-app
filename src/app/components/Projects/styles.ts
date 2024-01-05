'use client'
import styled from 'styled-components'

export const Container = styled.section`
  padding-left: ${({ theme }) => theme.spacings.large};
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
  font-weight: 500;
`

export const ProjectsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.spacings.xlarge};
`
