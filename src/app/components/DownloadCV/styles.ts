'use client'
import styled from 'styled-components'

export const DownloadButton = styled.button`
  border: none;
  border-radius: ${({ theme }) => theme.border.small_radius};
  box-shadow: ${({ theme }) => theme.shadow.box_shadow};
  background: ${({ theme }) => theme.colors.black};
  padding: 2rem 4rem;
  font-size: 2rem;
  width: fit-content;
  margin-top: 4rem;
  color: rgba(255, 255, 255, 0.7);

  &:hover {
    background: ${({ theme }) => theme.colors.grayish_blue};
    cursor: pointer;
    color: #fff;
  }
`
