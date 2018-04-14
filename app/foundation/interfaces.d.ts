interface IPostProps {
  id: number
  title: string
  body: string
}

interface IIndexProps {
  posts: Array<IPostProps>
}
