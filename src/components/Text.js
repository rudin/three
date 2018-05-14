import styled from 'styled-components'

export default styled.div`
  font-family: ${({ theme: { fonts } }) => fonts.body.font};
  font-size: ${({ theme: { fonts } }) => fonts.body.size}px;
  font-weight: ${({ theme: { fonts } }) => fonts.body.normal};
`
