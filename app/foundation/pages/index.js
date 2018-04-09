import Layout from '../components/Layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = props => (
  <Layout>
    <h1>Posts</h1>

    <ul>
      {props.posts.map(post => (
        <li key={post.id}>
          <Link as={`/posts/${post.id}`} href={`/post?id=${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/posts/')
  const posts = await res.json()

  console.log(`Fetched posts: ${posts.length}`)

  return {
    posts,
  }
}

export default Index
