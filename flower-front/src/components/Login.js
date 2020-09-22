import React, { Component } from "react"
import "../assets/css/login.css"
import { Tabs } from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';
import axios from "axios";
import MySearch from "../view/MySearch"
import Nav from "../view/nav/Nav"



const { TabPane } = Tabs;



export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            phoneS: ""
        }
    }
    //监听登录中的电话和密码
    phonechange(e) {
        this.setState({
            phoneNum: e.target.value
        })
    }
    pwdchange(e) {
        this.setState({
            pwd: e.target.value
        })
    }
    nicknamechange(e) {
        this.setState({
            nickname: e.target.value
        })
    }
    surepwdchange(e) {
        this.setState({
            surepwd: e.target.value
        })
    }
    callback(key) {
        console.log(key);
    }


    login() {
        console.log(this.state.phoneNum);
        console.log(this.state.pwd);
        axios.post("http://127.0.0.1:7001/login", {
            phoneNum: this.state.phoneNum,
            pwd: this.state.pwd
        }).then(res => {
            //跳回主页面
            console.log(res);
            let list = res.data;
            let user = list[0];
            //存入cookie
            document.cookie = "user_id=" + user.user_id;
            document.cookie = "phoneNum=" + user.phoneNum;
            document.cookie = "pwd=" + user.pwd;
            document.cookie = "nickname=" + user.nickname;
            //跳到主页面
            this.props.history.push("/")
        }).catch(err => {
            alert("手机号或密码错误")
            console.log(err);
        })
    }
    onlyphone() {
        if (this.state.pwd === this.state.surepwd && this.state.pwd !== undefined && this.state.nickname !== undefined && this.state.phoneNum !== undefined) {
            axios.post("http://127.0.0.1:7001/onlyphone", {
                phoneNum: this.state.phoneNum,
            }).then(res => {
                console.log(res.data.length);
                if (res.data.length !== 1) {
                    this.regist()
                } else {
                    alert("手机号重复")
                }
            }).catch(err => {
                console.log(err);
            })
        } else {
            alert("请确认信息的正确性")
        }


    }
    regist() {
        axios.post("http://127.0.0.1:7001/regist", {
            nickname: this.state.nickname,
            phoneNum: this.state.phoneNum,
            pwd: this.state.pwd
        }).then(res => {
            alert("注册成功请登录")

            //刷新页面跳转到登录 
            this.props.history.go(0) 
        }).catch(err => {
            console.log(err);
        })


    }



    render() {
        return (
            <>
                <Nav></Nav>
                <MySearch></MySearch>
                <div className="contanier">

                    <div className="loginbox">
                        <div className="box">
                            <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)}>
                                <TabPane tab="登录" key="1">
                                    <div className="login">
                                        <p>手机号码：<Input onChange={(e) => this.phonechange(e)} placeholder="请输入手机号" style={{ width: "180px", margin: "10px" }} /></p>
                                        <p>密　　码：<Input onChange={(e) => this.pwdchange(e)} type="password" placeholder="请输入密码" style={{ width: "180px", margin: "10px" }} /></p>
                                    </div>
                                    <Button onClick={this.login.bind(this)} style={{ float: "right", margin: "30px 20px" }} type="primary">确认登录</Button>
                                </TabPane>
                                <TabPane tab="注册" key="2">
                                    <div className="regist">
                                        <p>昵　　称：<Input onChange={(e) => this.nicknamechange(e)} ref="nickname" placeholder="请输入昵称" style={{ width: "180px", margin: "5px" }} /></p>
                                        <p>手机号码：<Input onChange={(e) => this.phonechange(e)} ref="phoneNum" placeholder="请输入手机号" style={{ width: "180px", margin: "5px" }} /></p>
                                        <p>密　　码：<Input onChange={(e) => this.pwdchange(e)} ref="pwd" type="password" placeholder="请输入密码" style={{ width: "180px", margin: "5px" }} /></p>
                                        <p>确认密码：<Input onChange={(e) => this.surepwdchange(e)} type="password" placeholder="请确认密码" style={{ width: "180px", margin: "5px" }} /></p>
                                    </div>
                                    <Button style={{ float: "right", margin: "20px 20px" }} type="submit" onClick={this.onlyphone.bind(this)}>确认注册</Button>
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </>
        )

    }




}