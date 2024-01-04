import * as Styled from './styles'

const About = () => {
  return (
    <Styled.Container>
      <Styled.ContainerTitle>Sobre</Styled.ContainerTitle>
      <Styled.InfoImgContainer>
        <Styled.ProfileImg src="profile3.png" />
        <Styled.InfoContainer>
          <Styled.InfoTitle>Sobre mim</Styled.InfoTitle>
          <p>Desenvolvedora Frontend</p>
        </Styled.InfoContainer>
      </Styled.InfoImgContainer>
    </Styled.Container>
  )
}

export default About
