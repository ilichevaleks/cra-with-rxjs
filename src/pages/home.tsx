import React, { useCallback } from 'react'
import { useStore } from 'lib/rx-store'
import { todoStore } from 'store'
import {
  todosSelector,
  todosLengthSelector
} from 'store/todo.store'

import PageLayout from 'components/common/PageLayout'
import Container from 'components/common/Container'
import Grid from 'components/common/Grid'

const HomePage: FPC = () => {
  const todos = useStore(todoStore, todosSelector)
  const length = useStore(todoStore, todosLengthSelector)

  const handleClick = useCallback(() => {
    const count = length + 1
    todoStore.addTodo('Todo ' + count)
  }, [length])

  return (
    <PageLayout>
      <Container>
        <Grid container>
          <Grid item>
            <button type="button" onClick={handleClick}>
              Add todo
            </button>
            {todos.map((todo, index) => (
              <p key={index}>{todo.text}</p>
            ))}
          </Grid>
        </Grid>
      </Container>
    </PageLayout>
  )
}

export default HomePage
