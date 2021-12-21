import React, { FC, Fragment, useEffect, useState } from 'react'
import { Layout } from 'antd'
import { useLocation } from 'react-router-dom'
import { UserOutlined, HomeOutlined } from '@ant-design/icons'
import BreadcrumbCustom from 'components/layout/breadcrumb-custom'
import { capitalizeFirstLetter } from 'utils'

interface IHeaderProps {}

const Header: FC<IHeaderProps> = () => {
  const location = useLocation()
  const [routes, setRoutes] = useState<any[]>([])

  useEffect(() => {
    setRoutes(createRoutes(location.pathname))
  }, [location])

  const createRoutes = (path: string) => {
    if (path !== '/') {
      return path.split('/').map((item: any) => {
        return {
          path: `${path.split(item)[0]}${item}`,
          breadcrumbName: (
            <span>
              {item === '' ? (
                <HomeOutlined />
              ) : item?.includes('user') ? (
                <UserOutlined />
              ) : (
                <Fragment />
              )}
              <span style={{ marginLeft: '0.5em' }}>
                {item === ''
                  ? 'Home'
                  : `${item
                      .split('-')
                      .map((itm: any) => {
                        return capitalizeFirstLetter(itm)
                      })
                      .join(' ')}`}
              </span>
            </span>
          ),
        }
      })
    } else {
      return [
        {
          path: '/',
          breadcrumbName: (
            <span>
              <HomeOutlined />
              <span style={{ marginLeft: '0.5em' }}>Home</span>
            </span>
          ),
        },
      ]
    }
  }

  return (
    <Fragment>
      <Layout.Header
        className="site-layout-background"
        style={{
          padding: '1em 2em',
          width: '100%',
          position: 'fixed',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <BreadcrumbCustom routes={routes} />
      </Layout.Header>
    </Fragment>
  )
}

export default Header
