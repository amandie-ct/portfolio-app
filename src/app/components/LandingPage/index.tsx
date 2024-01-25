import Button from '../Button'
import Menu from '../Menu'
import * as Styled from './styles'
import { motion } from "framer-motion"
import { resumeLink } from '@/app/data/links'

const LandingPage = () => {

  return (
    <Styled.LandingPage>
      <Menu />
      <Styled.IdentificationContainer>
        <Styled.LandingPageImg>
          <Styled.Identification>
            <motion.div
            animate={{ x: 150 }} 
            initial={{x: 0, opacity: 0}}
            transition={{ delay: 0.1, duration: 2.5 }}
            whileInView={{ opacity: 1 }}
            >
            <h2>Desenvolvedora frontend</h2>
            </motion.div>
            <motion.div
            animate={{ x: 200 }} 
            initial={{x: 0, opacity: 0}}
            transition={{ delay: 0.1, duration: 2.5 }}
            whileInView={{ opacity: 1 }}
            >
            <h1>Amanda Carvalho</h1>
            </motion.div>

            <motion.div
            animate={{ y: 50 }} 
            initial={{y: 0, opacity: 0}}
            transition={{ delay: 0.1, duration: 2.5 }}
            whileInView={{ opacity: 1 }}
            >
              <Button text="Baixar currículo" link={resumeLink} target="_blank" rel="noreferrer"/>
            </motion.div>
          </Styled.Identification>
        </Styled.LandingPageImg>
      </Styled.IdentificationContainer>
    </Styled.LandingPage>
  )
}

export default LandingPage
