import React from "react";
import "./Nav.css";
import erweima from "../../image/erweima.png";
import axios from "axios";


export default class Nav extends React.Component {
    constructor() {
        super();
        this.state = {
            islogin: false,
        }
    }
    componentWillMount() {
        this.isLogin()
    }

    toPerson() {
        this.props.history.push({ pathname: "/Person" });
    }
    getCookie(key) {
        let name = key + "="; //"pwd="
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            // "pwd=abc"   "price=12.4"  "name=小王"
            let c = ca[i].trim();
            if (c.indexOf(name) == 0) {
                //"pwd=abc"	   //4       ,  7
                return c.substring(name.length, c.length);
            }
        }
        return null;
    }
    // 判断是否登录 cookie
    isLogin() {
        let nickname = this.getCookie("nickname")
        console.log(nickname);
        this.setState({
            nickname: nickname
        })
        if (nickname) {
            this.state.islogin = true
        }
    }
    loginout() {
        //cookie
        document.cookie = "user_id=" + "";
        document.cookie = "phoneNum=" + "";
        document.cookie = "nickname=" + "";
        
        
        // this.props.history.push({ pathname: "/" });
        alert("退出登录成功")
        window.location.reload(true)
        
    }
    toBuycar() {
        if(this.getCookie("nickname")) {
            this.props.history.push({ pathname: "/buycar" });
        } else {
            this.props.history.push({ pathname: "/login" });
        }
    }
    render() {
        return (
            <>
                {/* <img src={icons}/> */}
                <div className="nav-top">
                    <div className="top-left">
                        <a>
                            <div className="icon1"></div>
                            <span>收藏花了么</span>
                        </a>
                        <a className="wechat">
                            <div className="icon2"></div>
                            <span>关注微信</span>
                            <div className="po-wechat">
                                <img src={erweima} alt="" />
                                <div>
                                    扫码关注
                                    <br />
                                    回复"礼物"更多惊喜！
                                </div>
                            </div>
                        </a>
                        <a className="app" href="#">
                            <div className="icon3"></div>
                            <span>花了么app</span>
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
                                    <a href="/login">你好，请登录</a>
                                    <a href="#">注册</a>
                                </div>

                                <a onClick={this.toPerson.bind(this)} style={{ display: this.state.islogin ? 'inline-block' : "none" }}>你好，{this.state.nickname}   </a><span style={{ display: this.state.islogin ? 'inline-block' : "none" }} className="loginout" onClick={this.loginout.bind(this)}>退出</span>

                            </div>

                            <span>|</span>
                            <a href="#">订单查询</a>
                            <span>|</span>
                            <a className="myflow" href="#">
                                我的花花
                            </a>
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
                            <a onClick={this.toBuycar.bind(this)}  className="shopcar" href="#">
                                <div className="icon4"></div>
                                购物车
                                {/* <span className="data">(0)</span>
                                <div className="hid-shopcar">
                                    您的购物车中没有商品，先去选购吧！
                                </div> */}
                            </a>
                            <span>|</span>
                            <span className="text">花了么:中国鲜花领先品牌</span>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
