import * as Styled from './styles'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  const phoneNumber: number = 5584996982723

  return (
    <Styled.Container>
      <h1>Contato</h1>
      <Styled.ContactsList>
        <a href="#">
          <Styled.StyledFontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          href={`https://api.whatsapp.com/send?phone=${phoneNumber}`}
          target="_blank"
          rel="noreferrer"
        >
          <Styled.StyledFontAwesomeIcon icon={faPhone} />
        </a>
        <a
          href="https://www.linkedin.com/in/carvalhot-amanda"
          target="_blank"
          rel="noreferrer"
        >
          <Styled.StyledFontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/amandie-ct"
          target="_blank"
          rel="noreferrer"
        >
          <Styled.StyledFontAwesomeIcon icon={faGithub} />
        </a>
      </Styled.ContactsList>
    </Styled.Container>
  )
}

export default Contact
