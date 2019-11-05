import React, { Component } from 'react'
import './home/home.css'
import {NavLink} from 'react-router-dom'
export default class Login extends Component {
    render() {
        return (
            <div className="content">
                <div className="sidebar">

                </div>
                <div className="mian_content">
                    <div className="head">
                        <ul className="breadcrumb">
                            <li>
                                <a href="/">主页</a>
                                <span className="divider">/</span>
                            </li>
                            <li className="sctive">登录</li>
                        </ul>
                    </div>
                    <div className="inner">
                        <div className="control-group">
                            <span>用户名</span>
                            <input type="text"/>
                        </div>
                        <div className="control-group">
                            <span>密码</span>
                            <input type="text"/>
                        </div>
                       <NavLink to="/home" ><button className="login">登录</button></NavLink>
                    </div>
                </div>
            </div>
        )
    }
}
