import React, { Component } from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import logo from '../../assets/images/logo.jpg';
import { reqLogin } from '../../api'
import './index.less';
import memoryUtils from '../../utils/memoryUtils';
import storageUtils from '../../utils/storageUtils';

class Login extends Component {
  render () {
    const NormalLoginForm = () => {
    
      const onFinish = async (values) => {
        const { username, password } = values
        const res = await reqLogin(username, password)
        if (res.status === 0) {
          message.success('登录成功')
          const user = res.data
          storageUtils.saveUser(user)
          memoryUtils.user = user
          this.props.history.replace('/')
        } else { 
          message.error(res.msg)
        }
      }
    
      return (
        <Form
            onFinish ={onFinish} className="login-form"
            initialValues={{
              username:'admin',//默认值
            }}
          >
            <Form.Item
              name="username"
              rules={[// 声明式验证: 直接使用别人定义好的验证规则进行验证
                { required: true, whitespace: true, message: '用户名必须输入' },
                { min: 4, message: '用户名至少4位' },
                { max: 12, message: '用户名最多12位' },
                { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成' },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="用户名"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
                {
                  min: 5,
                  message: 'Please enter a minimum password of 5 characters',
                },
                {
                  max: 15,
                  message: 'Please enter a maximum of 15 digits password',
                },
                { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成' },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Form.Item>
          </Form>
      )
    }
    return (
      <div className="login">
        <header className="login_header">
          <img src={logo} alt="" />
          <h1>宇宙科技商务有限公司后台管理系统</h1>
        </header>
        <section className="login_content">
          <h2>用户登录</h2>
          <div className='login_form'>
            <NormalLoginForm />
          </div>
        </section>
      </div>
    );
  }
}
export default Login