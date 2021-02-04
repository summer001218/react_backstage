import React, { Component } from 'react';
import { Layout } from 'antd';
import { Redirect, Route, Switch } from 'react-router-dom';
import memoryUtils from '../../utils/memoryUtils';

import Header from '../../components/header';
import LeftMenu from '../../components/left_menu/leftMenu';
import Home from '../home';
import Category from '../category';
import Product from '../product';
import Role from '../role';
import User from '../user';
import Bar from '../charts/bar';
import Line from '../charts/line';
import Pie from '../charts/pie';

const { Sider, Content, Footer } = Layout;

class Admin extends Component {
  render() {
    const user = memoryUtils.user;
    if (!user._id) {
      return <Redirect to="/login" />;
    }
    return (
      <Layout style={{ height: '100%' }}>
        <Sider>
          <LeftMenu />
        </Sider>
        <Layout style= {{backgroundColor: '#gray'}}>
          <Header>Header</Header>
          <Content style={{margin: '25px', backgroundColor: '#fff'}}>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/category" component={Category} />
              <Route path="/product" component={Product} />
              <Route path="/role" component={Role} />
              <Route path="/user" component={User} />
              <Route path="/charts/bar" component={Bar} />
              <Route path="/charts/line" component={Line} />
              <Route path="/charts/pie" component={Pie} />
              <Redirect to="/home" />
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center', color: '#aaaaaa', backgroundColor: '#fff' }}>
            推荐使用谷歌浏览器， 可以获得更佳页面操作体验
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Admin;
