import { combineReducers } from 'redux'
import { loginReducer } from 'pages/authenticate/login/reducer'

const rootReducers = combineReducers({ loginReducer })

export default rootReducers
