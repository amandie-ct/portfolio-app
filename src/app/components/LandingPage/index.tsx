import Button from '../Button'
import Menu from '../Menu'
import * as Styled from './styles'

const LandingPage = () => {
  return (
    <Styled.LandingPage>
      <Menu />
      <Styled.IdentificationContainer>
        <Styled.Identification>
          <h2>Desenvolvedora frontend</h2>
          <h1>Amanda Carvalho</h1>
          <Button text="Baixar currículo" />
        </Styled.Identification>

        <Styled.LandingPageImg>
          <img src="lpimg.jpg" />
        </Styled.LandingPageImg>
      </Styled.IdentificationContainer>
    </Styled.LandingPage>
  )
}

export default LandingPage
