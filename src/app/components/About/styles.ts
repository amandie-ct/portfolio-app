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

export const InfoImgContainer = styled.section`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
`

export const ProfileImg = styled.img`
  width: 350px;
  height: auto;
  margin-right: ${({ theme }) => theme.spacings.huge};

  &:hover {
    transform: rotatey(180deg);
  }
`

export const InfoContainer = styled.section`
  width: 70%;
  height: 100%;
  diplay: flex;
  flex-direction: column;

  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.sizes.medium};
`

export const InfoTitle = styled.h2`
  color: ${({ theme }) => theme.colors.golden};
  font-size: ${({ theme }) => theme.font.sizes.large};
  line-height: 9rem;
`

export const InfoContent = styled.p`
  width: 100%;
  text-align: justify;
  line-height: 5rem;
`

export const MoreInfoContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacings.large};
  display: flex;
  justify-content: space-between;
  width: 50%;
`

export const MoreInfoLinks = styled.a`
  color: ${({ theme }) => theme.colors.light_gray};
  text-decoration: none;
  padding-bottom: 0.5rem;
  box-sizing: border-box;
  font-weight: 400;

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.golden};
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    font-weight: 500;
  }
`
