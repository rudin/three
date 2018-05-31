import React from 'react'
import PropTypes from 'prop-types'

import BackgroundImage from './BackgroundImage'
import './PageHeader.css'
import Nav from './Nav'

import Headline from './Headline'
import { typographyStyles } from '../util/typographyStyles'
import styled from 'styled-components'
import { color } from 'styled-system'

import Button from './Button'
import { View } from './Primitives'

const Thing = styled.div`
  ${typographyStyles('headline')};
  ${color};
`

const Thang = styled.div`
  ${typographyStyles('caption')};
  ${color};
`

const Container = View.extend.attrs({ p: 3, color: 'primary1Color' })`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Navigation = View.extend``

const ActionButtons = View.extend``

const PageHeader = ({ title, subtitle, backgroundImage }) => (
  <div className="PageHeader relative">
    <Container>
      <Navigation>
        <Nav />
      </Navigation>
      <ActionButtons>
        <Button>Sign up for Crew</Button>
      </ActionButtons>
    </Container>

    <div className="container relative">
      <Headline mb={3} color={'primary1Color'} data-aos="fade-left">
        {title} lala
      </Headline>
      <Thing color="primary1Color" weight="normal">
        {title}
      </Thing>
      <Thang color="primary1Color" typographyStyle="footnote" weight="bold">
        {title}
        <br />More
      </Thang>
      {subtitle ? (
        <h2
          className="PageHeader--Subtitle"
          data-aos="fade-left"
          data-aos-duration="400"
        >
          {subtitle}
        </h2>
      ) : (
        ''
      )}
    </div>
  </div>
)

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default PageHeader
