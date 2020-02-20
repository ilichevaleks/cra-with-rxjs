import { RouteProps } from 'react-router-dom'

import HomePage from 'pages/home'
import FeedPage from 'pages/feed'

const routing: RouteProps[] = [
  {
    exact: true,
    path: '/',
    component: HomePage
  },
  {
    exact: true,
    path: '/feed',
    component: FeedPage
  }
]

export default routing
