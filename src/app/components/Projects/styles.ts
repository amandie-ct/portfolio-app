'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.faded_white1};
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
  min-width: 500px;
  max-width: 100%;
  height: fit-content;
  margin: 0 auto;
  cursor: pointer;
  position: relative;
  overflow: hidden;
`

export const ProjectImgOverlay = styled.section`
  border-radius: ${({ theme }) => theme.border.regular_radius};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(31, 24, 39, 0.5);
  display: flex;
  margin: auto;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 1;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};

    &:link {
      color: ${({ theme }) => theme.colors.faded_white2};
    }

    &:visited {
      color: ${({ theme }) => theme.colors.faded_white1};
    }

    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`

export const IconStyles = styled(FontAwesomeIcon)`
  font-size: ${({ theme }) => theme.font.sizes.huge};
  color: ${({ theme }) => theme.colors.faded_white3};
  margin-right: 30px;

  &:hover {
    color: ${({ theme }) => theme.colors.faded_white2};
  }
`

export const ProjectImg = styled.img`
  border-radius: ${({ theme }) => theme.border.regular_radius};
  height: 100%;
  width: 100%;

  }
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.sizes.large};
  margin-top: ${({ theme }) => theme.spacings.xsmall};
  font-weight: 200;
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
