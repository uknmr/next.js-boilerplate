import Header from './Header'
import { injectGlobal } from 'styled-components'
const Fragment = React.Fragment

injectGlobal`
  body {
    margin: 0 0 5em;
  }
`

export default props => (
  <Fragment>
    <Header />

    <main>{props.children}</main>
  </Fragment>
)
