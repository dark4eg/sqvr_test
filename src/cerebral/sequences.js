
import { set } from 'cerebral/factories'
import { state, props } from 'cerebral'

export const showAllHistory =  [
    set(state.show, true),
    set(state.userId, false),
]

export const showUserHistory =  [
    set(state.show, true),
    set(state.userId, props.userId),
]
  