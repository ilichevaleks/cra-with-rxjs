import React, { useState, useCallback } from 'react'
import PageLayout from 'components/common/PageLayout'
import useStore from 'utils/useStore'
import { todoStore } from 'store'

const HomePage: FPC = () => {
  const [count, setCount] = useState(0)
  const todos = useStore(todoStore, state => state.todos)

  const handleClick = useCallback(() => {
    setCount(count + 1)
    todoStore.addTodo('Todo ' + count)
  }, [count])

  return (
    <PageLayout>
      <button type="button" onClick={handleClick}>Add todo</button>
      {todos.map((todo, index) => (
        <p key={index}>{todo.text}</p>
      ))}
    </PageLayout>
  )
}

export default HomePage
