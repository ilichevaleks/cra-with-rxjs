import React from 'react'
import { Link } from 'react-router-dom'
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
        <Grid container spacing={3}>
          <Grid item lg={9}>
            <Link to="/">
              Home
            </Link>
            <Link to="/feed">
              Feed
            </Link>
          </Grid>
          <Grid item lg={3}>
            <p>Todos count: {length}</p>
          </Grid>
        </Grid>
      </Container>
    </header>
  )
}

export default Header
