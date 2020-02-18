import { RouteProps } from 'react-router-dom'

import HomePage from 'pages/home'

const routing: RouteProps[] = [
  {
    exact: true,
    path: '/',
    component: HomePage
  }
]

export default routing
