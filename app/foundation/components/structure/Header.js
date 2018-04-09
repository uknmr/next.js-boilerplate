import Link from 'next/link'
import styled from 'styled-components'
const Fragment = React.Fragment

const Header = styled.header`
  background-color: #f28db2;
  padding: 0.25em 0.5em;
  color: #fff;

  a {
    color: inherit;
    text-decoration: none;
  }
`

export default () => (
  <Header>
    <Link href="/">
      <a>Home</a>
    </Link>
  </Header>
)
