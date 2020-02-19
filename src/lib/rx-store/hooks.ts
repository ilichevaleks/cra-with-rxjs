import { useRef, useEffect, useState } from 'react'
import { ImmutableStore } from 'lib/rx-store'
import shallowEqual from 'shallowequal'

export function useStore<TState, TResult>(
  store: ImmutableStore<TState>,
  project: (store: TState) => TResult,
): TResult {
  const projectRef = useRef(project)
  useEffect(() => {
    projectRef.current = project
  }, [project])

  const [state, setState] = useState(projectRef.current(store.rxState.state))

  useEffect(() => {
    const subscription = store.rxState.state$.subscribe(value => {
      const newState = projectRef.current(value)
      if (!shallowEqual(state, newState)) {
        setState(newState)
      }
    })
    return () => {
      subscription.unsubscribe()
    }
  }, [store, state])

  return state
}
