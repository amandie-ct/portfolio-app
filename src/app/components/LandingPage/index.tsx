import Button from '../Button'
import Menu from '../Menu'
import * as Styled from './styles'
import { motion } from 'framer-motion'
import { resumeLink } from '@/app/data/links'

const LandingPage = () => {
  return (
    <Styled.LandingPage>
      <Menu />
      <Styled.IdentificationContainer>
        <Styled.LandingPageImg>
          <Styled.Identification>
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              transition={{ delay: 0.1, duration: 2.5 }}
              whileInView={{ opacity: 1, x: 150 }}
            >
              <h2>Desenvolvedora frontend</h2>
            </motion.div>
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              transition={{ delay: 0.1, duration: 2.5 }}
              whileInView={{ opacity: 1, x: 200 }}
            >
              <h1>Amanda Carvalho</h1>
            </motion.div>

            <motion.div
              initial={{ y: -50, opacity: 0 }}
              transition={{ delay: 0.1, duration: 2.5 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Button
                text="Baixar currículo"
                link={resumeLink}
                target="_blank"
                rel="noreferrer"
              />
            </motion.div>
          </Styled.Identification>
        </Styled.LandingPageImg>
      </Styled.IdentificationContainer>
    </Styled.LandingPage>
  )
}

export default LandingPage
