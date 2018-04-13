import React from 'react'
import Layout from '../components/structure/Layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

interface IPostProps {
  id: number
  title: string
}

interface IIndexProps {
  posts: Array<IPostProps>
}

class Index extends React.Component<IIndexProps, any> {
  static async getInitialProps() {
    const res = await fetch('http://jsonplaceholder.typicode.com/posts/')
    const posts = await res.json()

    console.log(`Fetched posts: ${posts.length}`)

    return {
      posts,
    }
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { posts } = this.props
    return (
      <Layout>
        <h1>Posts</h1>

        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Link as={`/posts/${post.id}`} href={`/post?id=${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    )
  }
}

export default Index
