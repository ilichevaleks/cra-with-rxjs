import React, { useEffect } from 'react'
import { useStore } from 'lib/rx-store'
import { feedStore } from 'store'
import { postsSelector } from 'store/feed.store'

import Grid from 'components/common/Grid'
import PostCard from '../PostCard'

const PostList = () => {
  const isLoading = useStore(feedStore, state => state.isLoading)
  const posts = useStore(feedStore, postsSelector)

  useEffect(() => {
    if (!posts.length) {
      feedStore.fetchPosts()
    }
  }, [posts])

  return (
    <div className="post-list">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Grid container spacing={3}>
          {posts.map(post => (
            <Grid item key={post.id}>
              <PostCard post={post} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  )
}

export default PostList
