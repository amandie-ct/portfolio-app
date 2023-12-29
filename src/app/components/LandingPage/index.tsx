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
        </Styled.Identification>
        <Styled.Profile>
          <img src="profile3.png" />
        </Styled.Profile>
      </Styled.IdentificationContainer>
    </Styled.LandingPage>
  )
}

export default LandingPage
