import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { typographyStyles } from '../util/typographyStyles'
import { space } from 'styled-system'

const Link = styled(NavLink).attrs({ p: 1 })`
  ${typographyStyles('body')};
  ${space};
  transition: color 0.2s, border-bottom-color 0.2s;
  color: black;
  text-decoration: none;
  border-bottom: 1px solid;
  border-bottom-color: transparent;
  &.active {
    color: ${({ theme: { colors } }) => colors.primary1Color}
    border-bottom-color: currentColor;
  }
`

export default ({ className, children, ...props }) => (
  <Link {...props} className={className}>
    {children}
  </Link>
)
