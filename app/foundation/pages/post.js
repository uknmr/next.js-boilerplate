import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'

const Post = props => (
  <Layout>
    <h1>{props.post.title}</h1>

    <p>{props.post.body}</p>
  </Layout>
)

Post.getInitialProps = async context => {
  const { id } = context.query
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const post = await res.json()

  console.log(`Fetched post: ${post.title}`)

  return { post }
}

export default Post
