import * as Styled from './styles'

interface IButtonProps {
  text: string
  link?: string
}

const Button = ({ text, link }: IButtonProps) => {
  return (
    <Styled.Button>
      <a href={link}>
        <p>{text}</p>
      </a>
    </Styled.Button>
  )
}

export default Button
