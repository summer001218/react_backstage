/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'
import './index.less'

export default class Header extends Component {
  logOut = () => {
    storageUtils.removeUser()
    return <Redirect to= '/login'/>
  }
  render() {
    return (
      <div className='header'>
        <div className='header-top'>
          <span>欢迎您，{ memoryUtils.user.username }</span>
          <a href="dangerouslySetInnerHTML" onClick = {this.logOut}>退出</a>
        </div>
        <div className='header-bottom'>
          <div className='header-bottom-left'>
            <span>首页</span>
          </div>
          <div className='header-bottom-right'>
            <span>2021</span>
            {/* <img src="" alt="" /> */}
            <strong>晴</strong>
          </div>
        </div>
      </div>
    )
  }
}
