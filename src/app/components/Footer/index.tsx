import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import * as Styled from './styles'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  const phoneNumber: number = 5584996982723

  return (
    <Styled.Footer id="contact">
      <Styled.ContainerTitle>Conecte-se</Styled.ContainerTitle>
      <Styled.FooterLinksContainer>
      <Styled.FooterLinks>
        <a
          href={`https://api.whatsapp.com/send?phone=${phoneNumber}`}
          target="_blank"
          rel="noreferrer"
        >
          <Styled.StyledFontAwesomeIcon icon={faPhone} />
          <p>Telefone</p>
        </a>
        <a
          href="https://www.linkedin.com/in/carvalhot-amanda"
          target="_blank"
          rel="noreferrer"
        >
          <Styled.StyledFontAwesomeIcon icon={faLinkedin} />
          <p>Linkedin</p>
        </a>
        <a
          href="https://github.com/amandie-ct"
          target="_blank"
          rel="noreferrer"
        >
          <Styled.StyledFontAwesomeIcon icon={faGithub} />
          <p>Github</p>
        </a>
        <a href="mailto:carvalhotp.amanda@gmail.com" target="_blank" rel="noreferrer">
          <Styled.StyledFontAwesomeIcon icon={faEnvelope} />
          <p>E-mail</p>
        </a>
      </Styled.FooterLinks>

      <Styled.PortfolioLink>Para visualizar o código desse projeto, &nbsp;<a href="https://github.com/amandie-ct/portfolio-app" target="_blank" rel="noreferrer">clique aqui</a></Styled.PortfolioLink>
      </Styled.FooterLinksContainer>
    </Styled.Footer>
  )
}

export default Footer
