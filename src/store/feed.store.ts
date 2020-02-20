import { ImmutableStore } from 'lib/rx-store'

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export type PostEntities = Record<string, Post>

export interface FeedStoreState {
  entities: PostEntities
  isLoading: boolean
  posts: number[]
}

export function postSelector(id: string | number) {
  return function postWithIdSelector(state: Readonly<FeedStoreState>) {
    return state.entities[id]
  }
}

export function postsSelector(state: Readonly<FeedStoreState>) {
  return state.posts.map(id => state.entities[id])
}

export class FeedStore extends ImmutableStore<FeedStoreState> {
  constructor() {
    super({
      entities: {},
      isLoading: false,
      posts: []
    })
  }

  async fetchPost(id: string | number) {
    const post = await fetch('http://jsonplaceholder.typicode.com/posts/' + id)
      .then<Post>(res => res.json())

    this.updateState(draft => {
      draft.entities[id] = post
    })
  }

  async fetchPosts() {
    this.updateState(draft => {
      draft.isLoading = true
    })

    const posts = await fetch('http://jsonplaceholder.typicode.com/posts')
      .then<Post[]>(res => res.json())

    const entities: PostEntities = {}
    const ids = posts.map(post => {
      entities[post.id] = post
      return post.id
    })

    this.updateState(draft => {
      draft.entities = entities
      draft.posts = ids
      draft.isLoading = false
    })
  }
}
