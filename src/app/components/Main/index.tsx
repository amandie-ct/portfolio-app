import About from '../About'
import Contact from '../Contact'
import LandingPage from '../LandingPage'
import Projects from '../Projects'
import * as Styled from './styles'

const Main = () => {
  return (
    <Styled.Main>
      <LandingPage />
      <Projects />
      <About />
      <Contact />
    </Styled.Main>
  )
}

export default Main
