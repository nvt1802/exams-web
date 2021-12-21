import { FC } from 'react'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import { UserOutlined, HomeOutlined } from '@ant-design/icons'

const defaultRoutes = [
  {
    path: '/',
    breadcrumbName: <HomeOutlined />,
  },
  {
    path: '/users-management',
    breadcrumbName: (
      <span>
        <UserOutlined />
        <span style={{ marginLeft: '0.5em' }}>Users Management</span>
      </span>
    ),
  },
  {
    path: '/details',
    breadcrumbName: 'Details',
  },
]

function itemRender(routes: any[]) {
  const last = routes.length - 1
  return routes.map((item: any, index: number) => {
    return last === index ? (
      <Breadcrumb.Item key={index}>{item?.breadcrumbName}</Breadcrumb.Item>
    ) : (
      <Breadcrumb.Item key={index}>
        <Link to={item?.path}>{item?.breadcrumbName}</Link>
      </Breadcrumb.Item>
    )
  })
}

interface IBreadcrumbCustomProps {
  routes?: any[]
}

const BreadcrumbCustom: FC<IBreadcrumbCustomProps> = ({
  routes = defaultRoutes,
}) => {
  return <Breadcrumb>{itemRender(routes)}</Breadcrumb>
}

export default BreadcrumbCustom
