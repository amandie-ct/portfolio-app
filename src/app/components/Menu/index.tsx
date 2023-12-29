import * as Styled from './styles'

const Menu = () => {
  const pdfLink =
    'https://docs.google.com/document/d/1WX_La6zZkMQ5JW3utyPXgm_jZl3lAyI8BySHJdselQ8/edit?usp=sharing'
  return (
    <Styled.Menu>
      <Styled.Links>
        <a href="#contact">Contato&nbsp;</a>|<a>Sobre&nbsp;</a>|
        <a href="#projects">Projetos&nbsp;</a>|
        <a href={pdfLink} target="_blank" rel="noreferrer">
          Baixar currículo
        </a>
      </Styled.Links>
    </Styled.Menu>
  )
}

export default Menu
