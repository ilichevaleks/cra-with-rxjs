import React, { useState, useCallback } from 'react'
import { useStore } from 'lib/rx-store'
import { todoStore } from 'store'

import PageLayout from 'components/common/PageLayout'
import Container from 'components/common/Container'

const HomePage: FPC = () => {
  const [count, setCount] = useState(0)
  const todos = useStore(todoStore, state => state.todos)

  const handleClick = useCallback(() => {
    setCount(count + 1)
    todoStore.addTodo('Todo ' + count)
  }, [count])

  return (
    <PageLayout>
      <Container>
        <button type="button" onClick={handleClick}>Add todo</button>
        {todos.map((todo, index) => (
          <p key={index}>{todo.text}</p>
        ))}
      </Container>
    </PageLayout>
  )
}

export default HomePage
