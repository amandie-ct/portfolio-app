import ProjectCard from '../ProjectCard'
import * as Styled from './styles'
import projectsData from '@/app/data/projectsData'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <Styled.Container id="projects">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <Styled.ContainerTitle>Projetos</Styled.ContainerTitle>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
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
      </motion.div>
    </Styled.Container>
  )
}

export default Projects
