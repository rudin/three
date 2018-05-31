import styled from 'styled-components'
import { space, color } from 'styled-system'

export default styled.h1`
  font-family: ${({ theme: { typographyStyles } }) =>
    typographyStyles.headline.font};
  font-size: ${({ theme: { typographyStyles } }) =>
    typographyStyles.headline.size}px;
  font-weight: ${({ theme: { typographyStyles } }) =>
    typographyStyles.headline.bold};
  ${space};
  ${color};
`
