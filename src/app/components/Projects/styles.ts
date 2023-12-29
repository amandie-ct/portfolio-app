'use client'
import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.sizes.large};
  width: 100%;
`
export const ContainerTitle = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacings.xlarge};
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

export const ProjectImg = styled.img`
  border-radius: ${({ theme }) => theme.border.regular_radius};
  min-width: 500px;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  cursor: pointer;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.faded_white2};
  font-size: ${({ theme }) => theme.font.sizes.large};
  margin-top: ${({ theme }) => theme.spacings.xsmall};
  text-transform: uppercase;
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
export const Tags = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.sizes.small};
  background-color: ${({ theme }) => theme.colors.grayish_blue};
  padding: ${({ theme }) => theme.spacings.xxsmall}
    ${({ theme }) => theme.spacings.xsmall};
  box-shadow: ${({ theme }) => theme.shadow.box_shadow};
  margin-bottom: ${({ theme }) => theme.spacings.xsmall};
  margin-right: ${({ theme }) => theme.spacings.xsmall};
  border-radius: ${({ theme }) => theme.border.small_radius};

  &:nth-of-type(2n) {
    background-color: ${({ theme }) => theme.colors.grayish_pink};
  }
`
