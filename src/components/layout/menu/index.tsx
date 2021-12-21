import { Menu } from 'antd'
import {
  MailOutlined,
  // CalendarOutlined,
  // AppstoreOutlined,
  SettingOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserAddOutlined,
} from '@ant-design/icons'
import { FC } from 'react'
import { Link } from 'react-router-dom'

const { SubMenu } = Menu

interface ICustomMenuProps {
  collapsed?: boolean
  setCollapsed?: (value: any) => void
}

const CustomMenu: FC<ICustomMenuProps> = ({
  collapsed = false,
  setCollapsed = (_value: any) => {},
}) => {
  const path = window.location.pathname || '/'
  const toggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Menu
      style={{ height: '100%' }}
      defaultSelectedKeys={[path]}
      defaultOpenKeys={['sub1']}
      mode={'inline'}
      theme={'dark'}
    >
      <Menu.Item key="/" icon={<MailOutlined />}>
        <Link to="/">HOME</Link>
      </Menu.Item>
      {/* <Menu.Item key="2" icon={<CalendarOutlined />}>
        Navigation Two
      </Menu.Item> */}
      <SubMenu key="sub1" icon={<UserAddOutlined />} title="Users Management">
        <Menu.Item key="/users-management">
          <Link to="/users-management">List Users</Link>
        </Menu.Item>
        <Menu.Item key="/users-management/create">
          <Link to="/users-management/create">Create Users</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" icon={<SettingOutlined />} title="Navigation Three">
        <Menu.Item key="7">Option 7</Menu.Item>
        <Menu.Item key="8">Option 8</Menu.Item>
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub3"
        onTitleClick={toggle}
        icon={
          collapsed ? (
            <MenuUnfoldOutlined onClick={toggle} className="trigger" />
          ) : (
            <MenuFoldOutlined onClick={toggle} className="trigger" />
          )
        }
        title=""
      ></SubMenu>
    </Menu>
  )
}

export default CustomMenu
