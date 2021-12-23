import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "antd"

import routes, { ROUTE_TYPE } from "pages/config-routes"
import Header from "components/layout/header"
import Sidebar from "components/layout/sidebar"
import './app.css'

function App(_props: any) {
  return (
    <BrowserRouter>
      <Layout style={{ height: "100%", position: "fixed" }}>
        <Sidebar />
        <Layout className="site-layout">
          <Header />
          <Layout.Content
            className="site-layout-background"
            style={{
              marginTop: "64px",
              position: "fixed",
              width: "100%",
            }}
          >
            <Routes>
              {routes.map((route: ROUTE_TYPE, i: number) => (
                <Route
                  key={i}
                  index={route.index}
                  path={route.path}
                  element={route.component}
                >
                  {route.subRoute?.map(
                    (subRouter: ROUTE_TYPE, index: number) => (
                      <Route
                        key={index}
                        index={subRouter.index}
                        path={subRouter.path}
                        element={subRouter.component}
                      >
                        {subRouter.subRoute?.map(
                          (sub2Router: ROUTE_TYPE, index: number) => (
                            <Route
                              key={index}
                              index={sub2Router.index}
                              path={sub2Router.path}
                              element={sub2Router.component}
                            />
                          )
                        )}
                      </Route>
                    )
                  )}
                </Route>
              ))}
            </Routes>
          </Layout.Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  )
}

export default App
