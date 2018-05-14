import styled from 'styled-components'
import { space } from 'styled-system'

export default styled.h1`
  font-family: ${({ theme: { fonts } }) => fonts.headline.font};
  font-size: ${({ theme: { fonts } }) => fonts.headline.size}px;
  font-weight: ${({ theme: { fonts } }) => fonts.headline.bold};
  ${space};
`
