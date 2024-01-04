'use client'
import styled from 'styled-components'

export const CardContainer = styled.section`
  width: 80%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
  height: 50vh;
  display: flex;
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.spacings.xxlarge};
  width: 50%;
  h2 {
    color: ${({ theme }) => theme.colors.golden};
  }

  p {
    color: ${({ theme }) => theme.colors.medium_gray};
  }
`

export const CardImg = styled.img`
  width: 50%;
  height: 100%;
  cursor: pointer;
  &:hover {
    transform: scale(1.1, 1.1);
  }
`

export const CardLinks = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  color: ${({ theme }) => theme.colors.medium_gray};
  font-size: ${({ theme }) => theme.font.sizes.medium};
  a {
    cursor: pointer;

    &:hover {
      font-weight: bold;
    }
  }
`
