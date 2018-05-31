import React from 'react'
import PropTypes from 'prop-types'

import Nav from './Nav'

import Button from './Button'
import { View } from './Primitives'

const Container = View.extend.attrs({ p: 3, color: 'primary1Color' })`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Navigation = View.extend``

const ActionButtons = View.extend``

const PageHeader = ({ title, subtitle, backgroundImage }) => (
  <Container>
    <Navigation>
      <Nav />
    </Navigation>
    <ActionButtons>
      <Button>Sign up for Crew</Button>
    </ActionButtons>
  </Container>
)

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default PageHeader
