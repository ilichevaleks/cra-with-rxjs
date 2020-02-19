import React from 'react'
import { useStore } from 'lib/rx-store'
import { todosLengthSelector } from 'store/todo.store'
import { todoStore } from 'store'

import Container from '../Container'

const Header = () => {
  const length = useStore(todoStore, todosLengthSelector)

  return (
    <header className="header">
      <Container>
        Todos count: {length}
      </Container>
    </header>
  )
}

export default Header
