'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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

export const ProjectCard = styled.section`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-right: ${({ theme }) => theme.spacings.medium};

  p {
    text-align: justify;
    font-size: ${({ theme }) => theme.font.sizes.small};
    border-radius: ${({ theme }) => theme.border.small_radius};
  }
`

export const ProjectImgContainer = styled.section`
  max-width: 100%;
  height: fit-content;
  margin: 0 auto;
  cursor: pointer;
  position: relative;
  overflow: hidden;
`

export const ProjectImg = styled.img`
  border-radius: ${({ theme }) => theme.border.regular_radius};
  height: 100%;
  width: 100%;

  }
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.sizes.large};
  margin-top: ${({ theme }) => theme.spacings.xsmall};
  font-weight: 400;
`

export const TagsSection = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
`
export const TagsContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacings.xsmall};
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`
