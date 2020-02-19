import { RxState } from './rx-state'
import { Draft } from 'immer'

export class ImmutableStore<TState> {
  rxState!: RxState<TState>

  get draft() {
    return this.rxState.draft
  }

  constructor(initialState: TState) {
    this.rxState = new RxState<TState>(initialState)
  }

  public updateState(recipe: (draft: Draft<TState>) => void) {
    this.rxState.updateState(recipe)
  }
}
