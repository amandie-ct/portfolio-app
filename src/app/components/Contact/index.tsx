import * as Styled from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <Styled.Container>
      <Styled.ContactsList>
        <a href="#">
          <FontAwesomeIcon icon={faEnvelope} size={'2xs'} />
          <p>carvalhotp.amanda@gmail.com</p>
        </a>
        <a>
          <FontAwesomeIcon icon={faPhone} />
          <p>(84) 99698-2723</p>
        </a>
        <a
          href="https://www.linkedin.com/in/carvalhot-amanda"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
          <p>@carvalhot-amanda</p>
        </a>
        <a
          href="https://github.com/amandie-ct"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
          <p>@amandie-ct</p>
        </a>
      </Styled.ContactsList>
    </Styled.Container>
  )
}

export default Contact
