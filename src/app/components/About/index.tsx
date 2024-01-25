'use client'
import { useState } from 'react'
import * as Styled from './styles'
import TabButton from '../TabButton'
import tabData from '@/app/data/tabData'
import { motion } from 'framer-motion'

const About = () => {
  const [tab, setTab] = useState('skills')

  const handleTabChange = (id: string) => {
    setTab(id)
  }

  return (
    <Styled.Container id="about">
      <motion.div
        animate={{ y: 0 }}
        initial={{ y: -80, opacity: 0 }}
        transition={{ delay: 0.1, duration: 2.5 }}
        whileInView={{ opacity: 1 }}
      >
        <Styled.ContainerTitle>Sobre</Styled.ContainerTitle>
      </motion.div>
      <Styled.InfoImgContainer>
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: -100, opacity: 0.5 }}
          transition={{ duration: 3 }}
          whileInView={{ opacity: 1 }}
        >
          <Styled.ProfileImg src="profile3.png" alt="foto de perfil" />
        </motion.div>
        <Styled.InfoContainer>
          <motion.div
            animate={{ y: 0 }}
            initial={{ y: -80, opacity: 0 }}
            transition={{ delay: 0.1, duration: 2.5 }}
            whileInView={{ opacity: 1 }}
          >
            <Styled.InfoTitle>Sobre mim</Styled.InfoTitle>
          </motion.div>
          <motion.div
            animate={{ x: 0 }}
            initial={{ x: 100, opacity: 0.5 }}
            transition={{ duration: 3 }}
            whileInView={{ opacity: 1 }}
          >
            <Styled.InfoContent>
              Sou uma desenvolvedora frontend proativa e autodidata, com
              espírito de pesquisadora (fiz mestrado em outra área antes de
              migrar pra tecnologia) e que adora esquecer do resto do mundo por
              horas enquanto se dedica a resolver problemas complexos e a
              aprender a utilizar novas tecnologias. Meu propósito de vida é
              evoluir constantemente em tudo que me proponho a fazer, e com
              minha profissão não poderia ser diferente - busco excelência no
              desenvolvimento de código, em lidar com pessoas e em gerar valor
              para negócios. Anos de experiência com tecnologia me mostraram que
              é uma área na qual juntos chegamos mais longe, e em virtude disso,
              estou constantemente contribuindo e trocando conhecimentos e
              experiências com outros desenvolvedores.{' '}
            </Styled.InfoContent>
          </motion.div>

          <motion.div
            animate={{ y: 0 }}
            initial={{ y: 100, opacity: 0.5 }}
            transition={{ duration: 3 }}
            whileInView={{ opacity: 1 }}
          >
            <Styled.MoreInfoContainer>
              <TabButton
                selectTab={() => handleTabChange('skills')}
                active={tab === 'skills'}
              >
                Tecnologias
              </TabButton>

              <TabButton
                selectTab={() => handleTabChange('education')}
                active={tab === 'education'}
              >
                Educação
              </TabButton>

              <TabButton
                selectTab={() => handleTabChange('languages')}
                active={tab === 'languages'}
              >
                Idiomas
              </TabButton>
            </Styled.MoreInfoContainer>
          </motion.div>

          <motion.div
            animate={{ y: 0 }}
            initial={{ y: 100, opacity: 0.5 }}
            transition={{ duration: 3 }}
            whileInView={{ opacity: 1 }}
          >
            <Styled.TabContent>
              {/* @ts-expect-error:next-line */}
              {tabData.find((t) => t.id === tab).content}{' '}
            </Styled.TabContent>
          </motion.div>
        </Styled.InfoContainer>
      </Styled.InfoImgContainer>
    </Styled.Container>
  )
}

export default About
