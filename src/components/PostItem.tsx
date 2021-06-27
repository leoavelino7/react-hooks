import { memo } from 'react'

export type Post = {
  id: string
  title: string
  body: string
}

type PostItemProps = {
  post: Post
}

function PostItemComponent({post: { id, title, body }}: PostItemProps) {
  return (
    <li>
        <strong>{id} - {title}</strong>
        <p>{body}</p>
    </li>
  )
}

export const PostItem = memo(PostItemComponent)