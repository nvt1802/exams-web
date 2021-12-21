import React from "react"

import authRoutes from "./authenticate/route"
import examsRoutes from "./exams/route"

export interface ROUTE_TYPE {
  path?: string | undefined
  component?: React.ReactElement
  index?: boolean | undefined
  subRoute?: Array<ROUTE_TYPE>
}

const routes: Array<ROUTE_TYPE> = [...authRoutes, ...examsRoutes]

export default routes
