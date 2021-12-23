import { createAsyncAction } from 'typesafe-actions'

export const getInfoUserAsyncAction = createAsyncAction(
  'GET_USER_INFO_REQUEST',
  'GET_USER_INFO_SUCCESS',
  'GET_USER_INFO_FAILURE'
)<any, any, any>()
