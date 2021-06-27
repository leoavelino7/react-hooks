import { useEffect, useState } from "react"

import { PostItem, Post } from './PostItem'

export function PostList() {
  const [posts, setPosts] = useState<Post[]>([])
  const [newPost, setNewPost] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data)
      })
  }, [])

  return (
    <>
      <input type="text" onChange={e => setNewPost(e.target.value)} value={newPost} />
      <ul>
        {posts.map((post) => {
          return (
            <PostItem key={post.id} post={post} />
          )
        })}
      </ul>
    </>
  )
}