import { resumeLink } from '@/app/data/links'
import * as Styled from './styles'

const Menu = () => {

  return (
    <Styled.Menu>
      <Styled.Links>
        <a href="#about">Sobre&nbsp;</a>
        <a href="#projects">Projetos&nbsp;</a>
        <a href="#contact">Contato&nbsp;</a>
        <a href={resumeLink} target="_blank" rel="noreferrer">
          Baixar currículo
        </a>
      </Styled.Links>
    </Styled.Menu>
  )
}

export default Menu
