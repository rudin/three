import styled from 'styled-components'
import { space, color } from 'styled-system'

const Button = styled.button`
  display: inline-block;
  position: relative;
  border: 0;
  text-decoration: none;
  font-family: inherit;
  cursor: pointer;
  &:hover {
    opacity: 0.75;
  }
  &:focus {
    outline: none;
  }
  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
    cursor: default;
  }
  border-radius: 99999px;
  ${space} ${color};
`

Button.defaultProps = {
  m: 0,
  px: 2,
  py: 1,
  bg: 'primary1Color'
}

export default Button
