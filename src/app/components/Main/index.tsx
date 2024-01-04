import About from '../About'
import Footer from '../Footer'
import LandingPage from '../LandingPage'
import Projects from '../Projects'
import * as Styled from './styles'

const Main = () => {
  return (
    <Styled.Main>
      <LandingPage />
      <About />
      <Projects />
      <Footer />
    </Styled.Main>
  )
}

export default Main
