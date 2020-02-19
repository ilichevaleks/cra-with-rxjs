import React from 'react'
import { useStore } from 'lib/rx-store'
import { todoStore } from 'store'

import Container from '../Container'

const Header = () => {
  const todos = useStore(todoStore, state => state.todos)

  return (
    <header className="header">
      <Container>
        Todos count: {todos.length}
      </Container>
    </header>
  )
}

export default Header
