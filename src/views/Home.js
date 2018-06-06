import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import MarkDownContent from '../components/Content'
import PageHeader from '../components/PageHeader'
import { Header, Body, Content } from '../components/Layout'
import Hero from '../components/Hero'
import SideBySide from '../components/SideBySide'
import Catchphrase from '../components/Catchphrase'

export default ({ page }) => {
  const { title, subtitle, body } = page
  return (
    <Fragment>
      <Header>
        <PageHeader title={title} subtitle={subtitle} />
      </Header>
      <Body>
        <Content>
          <Hero />
          <Catchphrase>
            Suspendisse sagittis finibus turpis. Etiam quis luctus nibh, a
            euismod ligula. Phasellus dui eros, feugiat.
          </Catchphrase>
          <SideBySide reverse>
            <div>ONE</div>
            <div>TWO</div>
          </SideBySide>
          <MarkDownContent source={body} />
        </Content>
        <Helmet>
          <title>{title}</title>
        </Helmet>
      </Body>
    </Fragment>
  )
}
