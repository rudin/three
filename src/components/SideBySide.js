// this thing with animage on the left, text on the right or vice versa
// reverse

import React from 'react'
import { Link } from 'react-router-dom'
import { View } from './Primitives'
import Text from '../components/Text'
import styled from 'styled-components'

const breakpoint = number => ({ theme: { breakpoints } }) => breakpoints[number]

const Container = View.extend.attrs({ pb: 4 })`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  @media (max-width: ${breakpoint(0)}) {
    flex-wrap: wrap;
    flex-direction: column;
  }
  &:last-of-type {
    padding-bottom: 0;
  }
  & > * {
    flex: 1
  }
`

const Description = Text.extend.attrs({ fontSize: [1, 2, 3] })`
  @media (max-width: ${breakpoint(0)}) {
    margin-top: 32px;
  }
`

const Title = styled.h3`
  color: #333;
  font-size: 1.6em;
  font-weight: 700;
  margin: 0 0 16px 0;
`

const Abstract = styled.div`
  margin-bottom: 16px;
`

const ReadMore = Text.extend``

const Image = styled.div`
  background: grey;
  min-width: 200px;
  min-height: 100px;
`

const SideBySide = props => {
  const { children, reverse } = props
  return <Container reverse={reverse}>{children}</Container>
}

/*
        <Image>{props.logo}</Image>
        <Description>
          <Title>{props.title}</Title>
          <Abstract>{props.abstract}tekstenetegeg</Abstract>
        </Description>
        */
export default SideBySide
