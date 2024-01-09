import { ReactNode } from 'react'
import * as Styled from './styles'

export interface ITabButtonProps {
  children: ReactNode
  selectTab: () => void
  active: boolean
}

const TabButton = ({ children, selectTab, active }: ITabButtonProps) => {
  return (
    <Styled.TabButton onClick={selectTab} active={active} >
      <p>{children}</p>
    </Styled.TabButton>
  )
}

export default TabButton
