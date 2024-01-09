'use client'
import styled, { css } from 'styled-components'
import { ITabButtonProps } from '.'

export interface TabButtonStyleProps {
  active?: boolean
}

export const TabButton = styled.div<TabButtonStyleProps>`
  border-bottom: ${(props) => (props.active? '2px solid #d8a47a' : 'none')};
  color: ${(props) => (props.active ? '#fff' : '#bbbbbb')};
  font-weight: ${(props) => (props.active ? '500' : '400')};
  margin-right: 4rem;
  padding-bottom: 0.5rem;
  text-decoration: none;
  cursor: pointer;
`

