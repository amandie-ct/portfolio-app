import * as Styled from './styles'

const Projects = () => {
  const technologies = [
    'NextJS',
    'TypeScript',
    'React',
    'Redux-Toolkit',
    'React Testing Library',
    'Styled-Components'
  ]
  return (
    <Styled.Container id="projects">
      <Styled.ContainerTitle>Projetos</Styled.ContainerTitle>
      <Styled.ProjectsContainer>
        <Styled.ProjectCard>
          <Styled.ProjectImg src="pokedex.png" />
          <Styled.Title>Pokedex</Styled.Title>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
            nisi odit totam magni veritatis quaerat labore animi? Natus at ea
            sit sequi, repellendus exercitationem, minus, excepturi amet atque
            ratione quos. Soluta mollitia impedit repellat. Fuga dignissimos sed
            in veniam excepturi ipsum delectus modi consectetur quisquam nam
            voluptatum, sapiente, accusamus ipsam dicta. Quidem in, doloribus
            deserunt voluptate neque provident nisi nesciunt! Voluptates debitis
            dolor ab quasi quidem, illo veritatis aperiam similique pariatur
            laboriosam consequatur officiis deserunt enim. Rerum, quos
            asperiores repudiandae ipsum unde hic cumque recusandae illum
            voluptas. Laudantium, rem dolore.
          </p>
          <Styled.TagsSection>
            <Styled.Title>Tecnologias utilizadas</Styled.Title>
            <Styled.TagsContainer>
              {technologies.map((technology, index) => (
                <Styled.Tags key={index}>{technology}</Styled.Tags>
              ))}
            </Styled.TagsContainer>
          </Styled.TagsSection>
        </Styled.ProjectCard>

        <Styled.ProjectCard>
          <Styled.ProjectImg src="pokedex.png" />
          <Styled.Title>Pokedex</Styled.Title>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
            nisi odit totam magni veritatis quaerat labore animi? Natus at ea
            sit sequi, repellendus exercitationem, minus, excepturi amet atque
            ratione quos. Soluta mollitia impedit repellat. Fuga dignissimos sed
            in veniam excepturi ipsum delectus modi consectetur quisquam nam
            voluptatum, sapiente, accusamus ipsam dicta. Quidem in, doloribus
            deserunt voluptate neque provident nisi nesciunt! Voluptates debitis
            dolor ab quasi quidem, illo veritatis aperiam similique pariatur
            laboriosam consequatur officiis deserunt enim. Rerum, quos
            asperiores repudiandae ipsum unde hic cumque recusandae illum
            voluptas. Laudantium, rem dolore.
          </p>
          <Styled.TagsSection>
            <Styled.Title>Tecnologias utilizadas</Styled.Title>
            <Styled.TagsContainer>
              {technologies.map((technology, index) => (
                <Styled.Tags key={index}>{technology}</Styled.Tags>
              ))}
            </Styled.TagsContainer>
          </Styled.TagsSection>
        </Styled.ProjectCard>

        <Styled.ProjectCard>
          <Styled.ProjectImg src="pokedex.png" />
          <Styled.Title>Pokedex</Styled.Title>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
            nisi odit totam magni veritatis quaerat labore animi? Natus at ea
            sit sequi, repellendus exercitationem, minus, excepturi amet atque
            ratione quos. Soluta mollitia impedit repellat. Fuga dignissimos sed
            in veniam excepturi ipsum delectus modi consectetur quisquam nam
            voluptatum, sapiente, accusamus ipsam dicta. Quidem in, doloribus
            deserunt voluptate neque provident nisi nesciunt! Voluptates debitis
            dolor ab quasi quidem, illo veritatis aperiam similique pariatur
            laboriosam consequatur officiis deserunt enim. Rerum, quos
            asperiores repudiandae ipsum unde hic cumque recusandae illum
            voluptas. Laudantium, rem dolore.
          </p>
          <Styled.TagsSection>
            <Styled.Title>Tecnologias utilizadas</Styled.Title>
            <Styled.TagsContainer>
              {technologies.map((technology, index) => (
                <Styled.Tags key={index}>{technology}</Styled.Tags>
              ))}
            </Styled.TagsContainer>
          </Styled.TagsSection>
        </Styled.ProjectCard>
      </Styled.ProjectsContainer>
    </Styled.Container>
  )
}

export default Projects