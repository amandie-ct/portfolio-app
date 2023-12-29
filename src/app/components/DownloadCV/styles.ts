'use client'
import styled from 'styled-components'

export const DownloadButton = styled.div`
  border: none;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(68, 68, 68, 0.3);
  background: rgba(207, 192, 190, 0.7);
  padding: 2rem 4rem;
  font-size: 2rem;
  width: fit-content;
  margin-top: 4rem;
  color: rgba(255, 255, 255, 0.7);

  &:hover {
    background: rgb(207, 192, 190);
    cursor: pointer;
    color: #fff;
  }
`
