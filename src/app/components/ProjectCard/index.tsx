import * as Styled from './styles'

const ProjectCard = () => {
  return (
    <Styled.CardContainer>
      <Styled.CardImg src="pokedex.png" />
      <Styled.CardInfo>
        <h2>Pokedex</h2>
        <p>Descrição</p>
        <Styled.CardLinks>
          <a>Visualizar projeto &nbsp;</a>|<a> &nbsp;Visualizar código</a>
        </Styled.CardLinks>
      </Styled.CardInfo>
    </Styled.CardContainer>
  )
}

export default ProjectCard
