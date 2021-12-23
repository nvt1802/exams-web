import { all, call, takeEvery } from 'redux-saga/effects'
import { put } from 'typed-redux-saga'
import { getInfoUserAsyncAction } from './actions'
import Services from 'services'

function* getInfoUserSaga(
  action: ReturnType<typeof getInfoUserAsyncAction.request>
): Generator {
  try {
    const response: any = yield call(
      Services.LoginService.getUserInfo,
      action.payload
    )
    yield put(getInfoUserAsyncAction.success(response.data))
  } catch (error: any) {
    yield put(getInfoUserAsyncAction.failure(error))
  }
}

export default function* saga() {
  yield all([takeEvery(getInfoUserAsyncAction.request, getInfoUserSaga)])
}
