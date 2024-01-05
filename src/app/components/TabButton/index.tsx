import { ReactNode } from 'react'
import * as Styled from './styles'

interface ITabButtonProps {
  children: ReactNode
  selectTab: () => void
  active: boolean
}

const TabButton = ({ children, selectTab }: ITabButtonProps) => {
  return (
    <Styled.TabButton onClick={selectTab}>
      <p>{children}</p>
    </Styled.TabButton>
  )
}

export default TabButton
