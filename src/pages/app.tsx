import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { register, unregister } from 'serviceWorker'
import routing from 'routing'

import Layout from 'components/common/Layout'

const App = () => {
  useEffect(() => {
    register()
    return () =>
      unregister()
  }, [])

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {routing.map((route, index) => (
            <Route
              key={index}
              {...route}
            />
          ))}
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
