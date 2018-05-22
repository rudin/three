import * as Layout from 'react-holy-grail-layout'

const pageWidth = `
max-width: 1111px;
width: 90%;
margin: 0 auto;`

export const Header = Layout.Header.extend`
  ${pageWidth}
`

export const Body = Layout.Body.extend`
  ${pageWidth}
`

export const Content = Layout.Content
