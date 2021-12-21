import React, { FC, Fragment, useState } from 'react'
import { Layout } from 'antd'
import MenuCustom from 'components/layout/menu'

interface ISidebarProps {}

const Sidebar: FC<ISidebarProps> = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  return (
    <Fragment>
      <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
        <MenuCustom collapsed={collapsed} setCollapsed={setCollapsed} />
      </Layout.Sider>
    </Fragment>
  )
}

export default Sidebar
