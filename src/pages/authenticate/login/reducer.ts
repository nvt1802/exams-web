import { createReducer } from 'typesafe-actions'

import { getInfoUserAsyncAction } from './actions'

const initialState = {
  userInfo: {},
}

export const loginReducer = createReducer(initialState)
  .handleAction([getInfoUserAsyncAction.success], (state: any, action: any) => {
    return {
      ...state,
      ...action.payload,
    }
  })
  .handleAction([getInfoUserAsyncAction.failure], (state: any, action: any) => {
    return initialState
  })
