import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import MarkDownContent from '../components/Content'
import PageHeader from '../components/PageHeader'
import { Header, Body, Content } from '../components/Layout'

export default ({ page }) => {
  const { title, subtitle, body } = page
  return (
    <Fragment>
      <Header>
        <PageHeader title={title} subtitle={subtitle} />
      </Header>
      <Body>
        <Content>
          <MarkDownContent source={body} />
        </Content>
        <Helmet>
          <title>{title}</title>
        </Helmet>
      </Body>
    </Fragment>
  )
}
