import React from 'react';
import './Nav.css';
import erweima from '../../image/erweima.png'
import { Link } from 'react-router-dom';
export default class Nav extends React.Component {
    constructor() {
        super()
        this.state = {
            islogin: true,
            username: 'liuxing'
        }
    }
    // 判断是否登录 cookie
    isLogin() {

    }
    toPerson() {
        this.props.history.push({ pathname: "/Person" });
    }
    render() {
        return (
            <>
                {/* <img src={icons}/> */}
                <div className='nav-top'>
                    <div className='top-left'>
                        <a>
                            <div className='icon1'></div>
                            <span>收藏鲜花网(hua.com)</span>
                        </a>
                        <a className='wechat'>
                            <div className='icon2'></div>
                            <span>关注微信</span>
                            <div className='po-wechat'>
                                <img src={erweima} alt="" />
                                <div>
                                    扫码关注<br />
                            回复"礼物"更多惊喜！
                        </div>
                            </div>
                        </a>
                        <a className="app" href="#">
                            <div className="icon3"></div>
                            <span>花礼网app</span>
                            <div className="po-app">
                                <img src={erweima} alt="" />
                                <div>新人专享100元APP礼包</div>
                            </div>
                        </a>
                    </div>
                    <div className="top-right">
                        <div className="right-child">
                            <div className="loginer">
                                <div style={{ display: this.state.islogin ? 'none' : "inline-block" }}>
                                    <a href="#">你好，请登录</a>
                                    <a href="#">注册</a>
                                </div>

                                <a onClick={this.toPerson.bind(this)} style={{ display: this.state.islogin ? 'inline-block' : "none" }}>你好，{this.state.username}</a>
                            </div>

                            <span>|</span>
                            <a href="#">订单查询</a>
                            <span>|</span>
                            <a className="myflow" href="#">我的花礼</a>
                            <span>|</span>
                            <div className="service">
                                <a href="#">
                                    <span className="nabal">客户服务</span>
                                </a>
                                <div className="hid-service" style={{ textDecoration: `none` }}>
                                    <a href="#">在线付款</a>
                                    <a href="#">帮助中心</a>
                                    <a href="#">售后服务</a>
                                    <a href="#">配送范围</a>
                                    <a href="#">留言反馈</a>
                                </div>
                            </div>
                            <span>|</span>
                            <a className="shopcar" href="#">
                                <div className="icon4"></div>
                        购物车
                        <span className="data">(0)</span>
                                <div className="hid-shopcar">
                                    您的购物车中没有商品，先去选购吧！
                        </div>
                            </a>
                            <span>|</span>
                            <span className="text">中国鲜花礼品网:中国鲜花网领先品牌</span>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
