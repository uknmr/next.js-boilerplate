import React from 'react'
import Header from './Header'
import { injectGlobal } from 'styled-components'
const Fragment = React.Fragment

injectGlobal`
  body {
    margin: 0 0 5em;
  }
`

const Layout: React.SFC = props => (
  <Fragment>
    <Header />

    <main>{props.children}</main>
  </Fragment>
)

export default Layout
