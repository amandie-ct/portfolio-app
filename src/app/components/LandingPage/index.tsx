import Button from '../Button'
import Menu from '../Menu'
import * as Styled from './styles'

const LandingPage = () => {
  const downloadCV =
    'https://docs.google.com/document/d/1WX_La6zZkMQ5JW3utyPXgm_jZl3lAyI8BySHJdselQ8/edit?usp=sharing'

  return (
    <Styled.LandingPage>
      <Menu />
      <Styled.IdentificationContainer>
        <Styled.LandingPageImg>
          <Styled.Identification>
            <h2>Desenvolvedora frontend</h2>
            <h1>Amanda Carvalho</h1>
            <Button text="Baixar currículo" link={downloadCV} />
          </Styled.Identification>
        </Styled.LandingPageImg>
      </Styled.IdentificationContainer>
    </Styled.LandingPage>
  )
}

export default LandingPage
