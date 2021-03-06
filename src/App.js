import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'
import _findIndex from 'lodash/findIndex'
import _kebabCase from 'lodash/kebabCase'

import ThemeProvider from './components/ThemeProvider'
import ScrollToTop from './components/ScrollToTop'
import Meta from './components/Meta'
import Home from './views/Home'
import About from './views/About'
import Blog from './views/Blog'
import SinglePost from './views/SinglePost'
import Contact from './views/Contact'
import NoMatch from './views/NoMatch'
import FooterContent from './components/Footer'
import ServiceWorkerNotifications from './components/ServiceWorkerNotifications'
import AOS from './components/AOS'
import data from './data.json'
import { documentHasTerm, getCollectionTerms } from './util/collection'
import * as Layout from 'react-holy-grail-layout'
import View from './components/Primitives'

const Container = Layout.Container

class App extends Component {
  state = {
    data
  }

  getDocument = (collection, name) =>
    this.state.data[collection] &&
    this.state.data[collection].filter(page => page.name === name)[0]

  getDocuments = collection => this.state.data[collection]

  render() {
    const globalSettings = this.getDocument('settings', 'global')
    const {
      siteTitle,
      siteUrl,
      siteDescription,
      socialMediaCard,
      headerScripts
    } = globalSettings

    const posts = this.getDocuments('posts').filter(
      post => post.status !== 'Draft'
    )
    const categoriesFromPosts = getCollectionTerms(posts, 'categories')
    const postCategories = this.getDocuments('postCategories').filter(
      category => categoriesFromPosts.indexOf(category.name.toLowerCase()) >= 0
    )

    return (
      <Router>
        <ThemeProvider>
          <Container>
            <AOS options={{ duration: 250 }} />
            <ScrollToTop />
            <ServiceWorkerNotifications reloadOnUpdate />
            <Helmet
              defaultTitle={siteTitle}
              titleTemplate={`${siteTitle} | %s`}
            />
            <Meta
              title={siteTitle}
              url={siteUrl}
              description={siteDescription}
              absoluteImageUrl={
                socialMediaCard &&
                socialMediaCard.image &&
                siteUrl + socialMediaCard.image
              }
              twitterCreatorAccount={
                socialMediaCard && socialMediaCard.twitterCreatorAccount
              }
              twitterSiteAccount={
                socialMediaCard && socialMediaCard.twitterSiteAccount
              }
              headerScripts={headerScripts}
            />
            <Switch>
              <Route
                path="/"
                exact
                render={props => (
                  <Home page={this.getDocument('pages', 'home')} {...props} />
                )}
              />
              <Route
                path="/about/"
                exact
                render={props => (
                  <About page={this.getDocument('pages', 'about')} {...props} />
                )}
              />
              <Route
                path="/contact/"
                exact
                render={props => (
                  <Contact
                    page={this.getDocument('pages', 'contact')}
                    siteTitle={siteTitle}
                    {...props}
                  />
                )}
              />

              {/* Blog Routes */}
              <Route
                path="/blog/"
                exact
                render={props => (
                  <Blog
                    posts={posts}
                    postCategories={postCategories}
                    {...props}
                  />
                )}
              />
              <Route
                path="/blog/category/:slug/"
                render={props => {
                  //  help needed
                  const slug = props.match.params.slug
                  const categoryPosts = posts.filter(post =>
                    documentHasTerm(post, 'categories', slug)
                  )
                  if (!categoryPosts.length)
                    return <NoMatch siteUrl={siteUrl} />
                  return (
                    <Blog
                      posts={categoryPosts}
                      postCategories={postCategories}
                      showFeatured={false}
                      {...props}
                    />
                  )
                }}
              />
              <Route
                path="/blog/:slug/"
                render={props => {
                  const slug = props.match.params.slug
                  const singlePostID = _findIndex(
                    posts,
                    item => _kebabCase(item.title) === slug
                  )
                  const singlePost = posts[singlePostID]
                  const nextPost = posts[singlePostID + 1]
                  const prevPost = posts[singlePostID - 1]
                  if (!singlePost) return <NoMatch siteUrl={siteUrl} />
                  return (
                    <SinglePost
                      singlePost={singlePost}
                      nextPostURL={
                        nextPost && `/blog/${_kebabCase(nextPost.title)}/`
                      }
                      prevPostURL={
                        prevPost && `/blog/${_kebabCase(prevPost.title)}/`
                      }
                      {...props}
                    />
                  )
                }}
              />

              <Route render={() => <NoMatch siteUrl={siteUrl} />} />
            </Switch>
            <Layout.Footer>
              <FooterContent />
            </Layout.Footer>
          </Container>
        </ThemeProvider>
      </Router>
    )
  }
}

export default App
