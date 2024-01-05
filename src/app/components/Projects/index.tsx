import ProjectCard from '../ProjectCard'
import * as Styled from './styles'
import projectsData from '@/app/data/projectsData'

const Projects = () => {
  return (
    <Styled.Container id="projects">
      <Styled.ContainerTitle>Projetos</Styled.ContainerTitle>
      <Styled.ProjectsContainer>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            img={project.img}
            description={project.description}
            project_link={project.project_link}
            repository_link={project.repository_link}
            tags={project.tags}
          />
        ))}
      </Styled.ProjectsContainer>
    </Styled.Container>
  )
}

export default Projects
