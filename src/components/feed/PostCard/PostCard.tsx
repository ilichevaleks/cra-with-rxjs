import React from 'react'
import { Post } from 'store/feed.store'

export interface PostCardProps {
  post: Post
}

const PostCard = (props: Readonly<PostCardProps>) => {
  const {
    body,
    id,
    title
  } = props.post
  return (
    <div className="post-card">
      <p className="post-card__title">
        <a href={`/feed/${id}`}>
          {title}
        </a>
      </p>
      <p className="post-card__desc">{body}</p>
    </div>
  )
}

export default PostCard
