import React from 'react'
import { useStore } from 'lib/rx-store'
import { todosLengthSelector } from 'store/todo.store'
import { todoStore } from 'store'

import Container from '../Container'
import Grid from '../Grid'

const Header = () => {
  const length = useStore(todoStore, todosLengthSelector)

  return (
    <header className="header">
      <Container>
        <Grid container>
          <Grid item>
            <p>Todos count: {length}</p>
          </Grid>
        </Grid>
      </Container>
    </header>
  )
}

export default Header
