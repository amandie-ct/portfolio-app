import { faCode, faEye } from '@fortawesome/free-solid-svg-icons'
import * as Styled from './styles'

const ProjectCard = () => {
  return (
    <Styled.CardContainer>
      <Styled.CardImg src="pokedex.png" />
      <Styled.CardInfo>
        <h2>Pokedex</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
          praesentium, ullam consectetur corrupti facilis provident pariatur!
          Commodi quidem at animi accusantium asperiores nulla, recusandae
          reprehenderit eum repellat minima nobis minus? Fuga culpa impedit quo
          numquam dolore quae nihil voluptas eligendi, quidem nemo debitis
          expedita ipsa odio amet.
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
