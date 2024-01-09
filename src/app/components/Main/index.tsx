import About from '../About'
import Footer from '../Footer'

import { Metadata } from 'next'

import LandingPage from '../LandingPage'
import Projects from '../Projects'
import * as Styled from './styles'
// either Static metadata

export const metadata: Metadata = {
  title: 'Portfolio || Amanda Carvalho',
}

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
