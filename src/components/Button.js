import styled from 'styled-components'
import { space, color } from 'styled-system'
import { typographyStyles } from '../util/typographyStyles'

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
  ${space};
  ${color};
  ${typographyStyles('body')};
`

Button.defaultProps = {
  m: 0,
  px: 3,
  py: 2,
  bg: 'primary',
  color: 'primaryText'
}

export default Button
