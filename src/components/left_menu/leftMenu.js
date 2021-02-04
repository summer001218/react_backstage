import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import menuList from '../../config/menuConfig';
import logo from '../../assets/images/logo.jpg';
import './index.less';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2363428_eo6o2o1q3p4.js',
});

const { SubMenu } = Menu;

class LeftMenu extends Component {
  getMenuList = menuList => {
    const path = this.props.location.pathname;
    return menuList.map(ele => {
      if (!ele.children) {
        return (
          <Menu.Item key={ele.key}>
            <IconFont type={ele.icon} />
            <Link to={ele.key}>{ele.title}</Link>
          </Menu.Item>
        );
      } else {
        // const item = ele.children.find(item => ele.key === path);
        if (ele.children.find(cItem => path.indexOf(cItem.key) === 0)) {
          this.openKey = ele.key;
        }
        return (
          <SubMenu
            key={ele.key}
            title={
              <span>
                <IconFont type={ele.icon} />
                <span>{ele.title}</span>
              </span>
            }
          >
            {this.getMenuList(ele.children)}
          </SubMenu>
        );
      }
    });
  };
  constructor(props) {
    super(props)
    this.menuNodes = this.getMenuList(menuList);
  }
  render() {
    const path = this.props.location.pathname;
    const openKey = this.openKey;
    return (
      <div className="leftMenu">
        <header className="leftMenu_header">
          <img src={logo} alt="" />
          <h2>宇宙科技</h2>
        </header>
        <Menu
          mode="inline"
          theme="dark"
          selectedKeys={[path]}
          defaultOpenKeys={[openKey]}
        >
          {this.menuNodes}
        </Menu>
      </div>
    );
  }
}
export default withRouter(LeftMenu);
