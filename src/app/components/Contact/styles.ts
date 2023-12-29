'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  font-size: 15px;
  color: #fff;
  padding: 0 6rem;
`

export const ContactsList = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;  

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 3rem;
    color: #fff;
    text-decoration: none;

    p {
      font-size: '1.6'rem;
      color: rgba(130, 169, 191, 0.9);
    }

    &:hover {
      transform: scale(1.1, 1.1);
      transition: 0.3s;
      color: #fff;
      cursor: pointer;
    }

    &:active {
      translateY(-1.2rem);
      transition: 0.2s;
      transform: scale(0.9, 0.9);
    color: rgba(255, 255, 255, 0.7);
    }
  }
`
export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 6rem;
  color: rgba(255, 255, 255, 0.4);

  &:hover {
    rgba(255, 255, 255, 1);
  }
`
