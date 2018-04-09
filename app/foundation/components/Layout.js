import Header from './Header'
const Fragment = React.Fragment

export default props => (
  <Fragment>
    <Header />

    <main>{props.children}</main>
  </Fragment>
)
