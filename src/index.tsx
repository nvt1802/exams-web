import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./app"
import reportWebVitals from "./reportWebVitals"
import { ConfigProvider } from "antd"
import "antd/dist/antd.css"

import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import rootReducers from "./redux/reducers"
import { rootSaga } from "./redux/sagas"
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducers,
  compose(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider csp={{ nonce: "YourNonceCode" }}>
      <App />
    </ConfigProvider>
  </Provider>,
  document.getElementById("root")
)

reportWebVitals()
