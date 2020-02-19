import { ImmutableStore } from 'lib/rx-store'

export interface Todo {
  readonly text: string;
  readonly completed: boolean;
}

export enum VisibilityFilter {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
}

export interface TodoStoreState {
  todos: Todo[]
  visibilityFilter: VisibilityFilter
}

export function todosSelector(state: Readonly<TodoStoreState>) {
  return state.todos
}

export function todosLengthSelector(state: Readonly<TodoStoreState>) {
  return state.todos.length
}

export class TodoStore extends ImmutableStore<TodoStoreState> {
  constructor() {
    super({
      todos: [],
      visibilityFilter: VisibilityFilter.SHOW_ALL
    })
  }

  addTodo(text: string) {
    this.updateState(draft => {
      draft.todos.push({
        text,
        completed: false
      })
    })
  }
}
