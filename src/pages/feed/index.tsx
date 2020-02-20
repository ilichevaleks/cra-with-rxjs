import React from 'react'

import PageLayout from 'components/common/PageLayout'
import Container from 'components/common/Container'
import PostList from 'components/feed/PostList'

const FeedPage = () => {
  return (
    <PageLayout>
      <Container>
        <PostList />
      </Container>
    </PageLayout>
  )
}

export default FeedPage
