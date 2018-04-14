import Link from 'next/link'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background-color: #f28db2;
  padding: 0.25em 0.5em;
  color: #fff;

  a {
    color: inherit;
    text-decoration: none;
  }
`

const Header: React.SFC = props => <StyledHeader>{props.children}</StyledHeader>

export default () => (
  <Header>
    <Link href="/">
      <a>Home</a>
    </Link>
  </Header>
)
