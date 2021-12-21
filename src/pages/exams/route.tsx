import React from "react"

import { ROUTE_TYPE } from "pages/config-routes"
import ExamsManagementPage from "pages/exams"
import ExamsManagementRegisterPage from "pages/exams/register"
import ExamsManagementDetailPage from "pages/exams/detail"

const examsRoutes: Array<ROUTE_TYPE> = [
  {
    path: "exams-management",
    subRoute: [
      {
        component: <ExamsManagementPage />,
        index: true,
        subRoute: [],
      },
      {
        path: "register",
        component: <ExamsManagementRegisterPage />,
        index: false,
        subRoute: [],
      },
      {
        path: ":examId",
        component: <ExamsManagementDetailPage />,
        index: false,
        subRoute: [],
      },
    ],
  },
]

export default examsRoutes
