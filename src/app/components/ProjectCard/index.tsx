import { faCode, faEye } from '@fortawesome/free-solid-svg-icons'
import * as Styled from './styles'

interface IProjectCardProps {
  title: string
  id?: string
  img: string
  description: string
  project_link: string
  repository_link: string
  tags: string[]
}

const ProjectCard = ({
  title,
  img,
  description,
  project_link,
  repository_link,
  tags
}: IProjectCardProps) => {
  return (
    <Styled.CardContainer>
      <Styled.CardImg src={`${img}.png`} alt="printscren do projeto" />
      <Styled.CardInfo>
        <h2>{title}</h2>
        <p>{description}</p>

        <Styled.CardTechsContainer>
          {tags.map((tag) => (
            <Styled.CardTechButton>{tag}</Styled.CardTechButton>
          ))}
        </Styled.CardTechsContainer>

        <Styled.CardLinks>
          <a href={`${project_link}`} target="_blank" rel="noreferrer">
            <span>Visualizar projeto</span>
            &nbsp;
            <Styled.CardLinksIcon icon={faEye} />
          </a>
          <a href={`${repository_link}`} target="_blank" rel="noreferrer">
            <span>Visualizar código</span>&nbsp;
            <Styled.CardLinksIcon icon={faCode} />
          </a>
        </Styled.CardLinks>
      </Styled.CardInfo>
    </Styled.CardContainer>
  )
}

export default ProjectCard
