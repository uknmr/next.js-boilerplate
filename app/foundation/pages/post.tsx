import React from 'react'
import Layout from '../components/structure/Layout'
import fetch from 'isomorphic-unfetch'

class Post extends React.Component<IPostProps, any> {
  static async getInitialProps(context) {
    const { id } = context.query
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json()

    console.log(`Fetched post: ${post.title}`)

    return post
  }

  constructor(props) {
    super(props)
  }

  render() {
    const post = this.props

    return (
      <Layout>
        <h1>{post.title}</h1>

        <p>{post.body}</p>
      </Layout>
    )
  }
}

export default Post
