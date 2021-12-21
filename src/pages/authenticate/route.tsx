import React from "react"

import { ROUTE_TYPE } from "pages/config-routes"
import LoginPage from "pages/authenticate/login"
import SignUpPage from "pages/authenticate/signup"
import MainPage from "pages/main"

const authRoutes: Array<ROUTE_TYPE> = [
  {
    path: "",
    component: <MainPage />,
    index: false,
    subRoute: [],
  },
  {
    path: "login",
    component: <LoginPage />,
    index: false,
    subRoute: [],
  },
  {
    path: "signup",
    component: <SignUpPage />,
    index: false,
    subRoute: [],
  },
]

export default authRoutes
