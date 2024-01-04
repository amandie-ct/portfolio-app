import ProjectCard from '../ProjectCard'
import * as Styled from './styles'

const Projects = () => {
  return (
    <Styled.Container id="projects">
      <Styled.ContainerTitle>Projetos</Styled.ContainerTitle>
      <Styled.ProjectsContainer>
        <ProjectCard />
      </Styled.ProjectsContainer>
    </Styled.Container>
  )
}

export default Projects
