import * as Styled from './styles'

const About = () => {
  return (
    <Styled.Container>
      <Styled.ContainerTitle>Sobre</Styled.ContainerTitle>
      <Styled.InfoImgContainer>
        <Styled.ProfileImg src="profile3.png" />
        <Styled.InfoContainer>
          <Styled.InfoTitle>Sobre mim</Styled.InfoTitle>
          <Styled.InfoContent>
            Sou uma desenvolvedora frontend proativa e autodidata, com espírito
            de pesquisadora (fiz mestrado em outra área antes de migrar pra
            tecnologia) e que adora esquecer do resto do mundo por horas
            enquanto se dedica a resolver problemas complexos e a aprender a
            utilizar novas tecnologias. Meu propósito de vida é evoluir
            constantemente em tudo que me proponho a fazer, e com minha
            profissão não poderia ser diferente - busco excelência no
            desenvolvimento de código, em lidar com pessoas e em gerar valor
            para negócios. Anos de experiência com tecnologia me mostraram que é
            uma área na qual juntos chegamos mais longe e somos mais fortes, e
            em virtude disso, busco contribuir e trocar conhecimentos e
            experiências com outros desenvolvedores constantemente. No momento,
            busco oportunidade de integrar um time incrível para que possamos
            somar e crescer juntos.{' '}
          </Styled.InfoContent>
          <div>
            <p>Tecnologias</p>
            <p>Educação</p>
            <p>Experiência profissional</p>
            <p>Idiomas</p>
          </div>
        </Styled.InfoContainer>
      </Styled.InfoImgContainer>
    </Styled.Container>
  )
}

export default About
