import { fork } from 'redux-saga/effects'
import LoginSagas from 'pages/authenticate/login/saga'

export function* rootSaga() {
  yield fork(LoginSagas)
}
