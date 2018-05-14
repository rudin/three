import React from 'react'
import PropTypes from 'prop-types'

import BackgroundImage from './BackgroundImage'
import './PageHeader.css'
import Nav from './Nav'

import Headline from './Headline'

const PageHeader = ({ title, subtitle, backgroundImage }) => (
  <div className="PageHeader relative">
    {backgroundImage && <BackgroundImage src={backgroundImage} opacity={0.5} />}
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }} />
      <Nav />
    </div>
    <div className="container relative">
      <Headline mb={3} color={'primary1Color'} data-aos="fade-left">
        {title}
      </Headline>
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
