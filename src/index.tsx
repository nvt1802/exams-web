import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./app"
import reportWebVitals from "./reportWebVitals"
import { ConfigProvider } from "antd"
import "antd/dist/antd.css"

ReactDOM.render(
  <ConfigProvider csp={{ nonce: "YourNonceCode" }}>
    <App />
  </ConfigProvider>,
  document.getElementById("root")
)

reportWebVitals()
