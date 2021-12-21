import { FC, Fragment, useEffect, useState } from 'react'
import {
  Modal,
  Form,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  notification,
} from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Link, useLocation } from 'react-router-dom'
import { AxiosCreateSession } from 'services/httpClient'

interface ICustomMenuProps {}

const Login: FC<ICustomMenuProps> = (props: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [api, contextHolder] = notification.useNotification()
  const location = useLocation()

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      setIsModalVisible(true)
    } else {
      setIsModalVisible(false)
    }
  }, [location])

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const onFinish = async (values: any) => {
    const { email, password } = values
    AxiosCreateSession(email, password)
      .then((res) => {
        localStorage.setItem('token', res)
        setIsModalVisible(false)
        api.success({
          message: `Login successfully`,
          description: '',
          placement: 'bottomLeft',
        })
      })
      .catch((err: any) => {
        api.error({
          message: `Login failure`,
          description: '',
          placement: 'bottomLeft',
        })
      })
  }

  return (
    <Fragment>
      <Modal
        title="Login"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        maskClosable={false}
      >
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Row>
            <Col span={24} style={{ marginBottom: '1em' }}>
              <Form.Item
                name="email"
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ]}
                hasFeedback
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                  size="large"
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: 'Please input your Password!' },
                ]}
                hasFeedback
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                  size="large"
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item>
                <Row>
                  <Col span={12}>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                  </Col>
                  <Col span={12} style={{ justifyContent: 'end' }}>
                    <Link className="login-form-forgot" to="/">
                      Forgot password
                    </Link>
                  </Col>
                </Row>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  style={{ width: '100%' }}
                >
                  Log in
                </Button>
                Or <Link to="/">register now!</Link>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
      {contextHolder}
    </Fragment>
  )
}

export default Login
