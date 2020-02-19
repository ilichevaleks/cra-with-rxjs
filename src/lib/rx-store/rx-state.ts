import { BehaviorSubject } from 'rxjs'
import { Draft, createDraft, finishDraft } from 'immer'

export class RxState<TState> {
  private subject$: BehaviorSubject<TState>
  private currentDraft?: Draft<TState>

  get state() {
    return this.subject$.value
  }

  get state$() {
    return this.subject$
  }

  get draft(): Draft<TState> {
    if (this.currentDraft !== undefined) {
      return this.currentDraft
    }
    throw new Error("draft doesn't exists")
  }

  constructor(readonly initialState: TState) {
    this.subject$ = new BehaviorSubject(initialState)
  }

  public updateState(recipe: (draft: Draft<TState>) => void) {
    let topLevelUpdate = false
    if (!this.currentDraft) {
      this.currentDraft = createDraft(this.state)
      topLevelUpdate = true
    }
    recipe(this.currentDraft)
    if (!topLevelUpdate) {
      return
    }
    const newState = finishDraft(this.currentDraft, () => {}) as TState
    this.currentDraft = undefined
    if (newState !== this.state) {
      this.subject$.next(newState)
    }
  }
}
