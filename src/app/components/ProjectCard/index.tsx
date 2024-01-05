import { faCode, faEye } from '@fortawesome/free-solid-svg-icons'
import * as Styled from './styles'

const ProjectCard = () => {
  return (
    <Styled.CardContainer>
      <Styled.CardImg src="pokedex.png" alt="printscren do projeto" />
      <Styled.CardInfo>
        <h2>Pokedex</h2>
        <p>
          Esse projeto consome os dados da API Rest{' '}
          <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">
            PokeApi
          </a>{' '}
          para exibir uma lista de pokemons, que pode ser filtrada por tipo de
          pokemon ao clicar em um dos botões de categoria no início da tela. Ao
          clicar em um card de pokemon especifico, o usuário é redirecionado a
          uma tela que exibe mais detalhes sobre o pokemon selecionado. (Em
          andamento)
        </p>

        <Styled.CardTechsContainer>
          <Styled.CardTechButton>TypeScript</Styled.CardTechButton>
          <Styled.CardTechButton>NextJs</Styled.CardTechButton>
          <Styled.CardTechButton>Redux-toolkit</Styled.CardTechButton>
          <Styled.CardTechButton>Jest</Styled.CardTechButton>
        </Styled.CardTechsContainer>

        <Styled.CardLinks>
          <a
            href="https://pokedex-beta-sable.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <span>Visualizar projeto</span>
            &nbsp;
            <Styled.CardLinksIcon icon={faEye} />
          </a>
          <a
            href="https://github.com/amandie-ct/next-pokedex"
            target="_blank"
            rel="noreferrer"
          >
            <span>Visualizar código</span>&nbsp;
            <Styled.CardLinksIcon icon={faCode} />
          </a>
        </Styled.CardLinks>
      </Styled.CardInfo>
    </Styled.CardContainer>
  )
}

export default ProjectCard
