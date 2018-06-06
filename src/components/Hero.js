import React from 'react'
import SideBySide from './SideBySide'
import { View } from './Primitives'
import Headline from './Headline'

const HeroHeadline = Headline.extend`
  text-transform: capitalize;
`

export default () => (
  <SideBySide>
    <View>
      <HeroHeadline>Fringilla blandit morbi turpis nec</HeroHeadline>
    </View>
    <View>Image or something like that</View>
  </SideBySide>
)
