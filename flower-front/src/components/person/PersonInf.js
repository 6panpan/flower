import React, { Component } from "react"
import axios from "axios";
import "../../assets/css/personinf.css"
import { Input } from 'antd';
import { Button } from 'antd';
import { Radio } from 'antd';


export default class Personinf extends Component {
    constructor() {
        super();
        this.state = {
            userinf: [],
            sex: "男"
        }
    }
    componentDidMount() {
        this.getUserinf()
    }
    getCookie(key) {
        let name = key + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i].trim();
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return null;
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
    sexchange(e) {
        this.setState({
            sex: e.target.value
        })
    }
    imgchange(e) {
        console.log(e.target.files[0]);
        this.state.userinf.headimg = e.target.files[0]
    }
    getUserinf() {
        let user_id = this.getCookie("user_id")
        console.log(user_id);
        axios.get("http://127.0.0.1:7001/getUserinf", {
            params: {
                user_id: user_id
            }
        }).then(res => {
            this.setState({
                userinf :res.data[0],
                // sex:res.data[0].sex
            })
            console.log(this.state.userinf.sex);
        })
    }
    getsex(){
        return this.getCookie("sex")
    }
    infchange() {
        if (this.state.phoneNum === undefined) {
            this.state.phoneNum = this.state.userinf.phoneNum
        }
        if (this.state.nickname === undefined) {
            this.state.nickname = this.state.userinf.nickname
        }
        if (this.state.sex === undefined) {
            this.state.sex = this.state.userinf.sex
        }
        if (this.state.pwd === undefined) {
            this.state.pwd = this.state.userinf.pwd
        }

        let user_id = this.getCookie("user_id")


        let formData = new FormData();
        document.cookie = "nickname=" + this.state.nickname;
        document.cookie = "sex=" + this.state.sex;


        formData.append("user_id", user_id);
        formData.append("nickname", this.state.nickname);
        formData.append("pwd", this.state.pwd);
        formData.append("phoneNum", this.state.phoneNum);
        formData.append("sex", this.state.sex);
        

        let file = document.getElementById("choose").files[0];
        const config = {
            headers: {
                "Content-Type": "multipart/form-data;boundary=" + new Date().getTime()
            }
        };
        //不修改头像会报错
        if (file) {
            formData.append("uploadFile", file, file.name);
        }

        axios.post("http://127.0.0.1:7001/infchange", formData, config, {

        }).then(res => {
                alert("保存成功");
                this.getUserinf()
                this.state.userinf.headimg=res.data
                window.location.reload(true)
        }).catch(err=>{
            alert("保存失败")
        })
    }
    render() {
        return (
            <>
                <div style={{margin:"auto"}}>
                    <div className="changebox">
                        <div className="imgbox">
                            <div className="img">
                                <label>
                                    <img src={this.state.userinf.headimg}></img>
                                    <br></br>
                                    <span>修改头像</span>
                                    {/* <input className="myinp" onChange={(e) => this.imgchange(e)} type="file"></input> */}
                                    <input className="myinp" onChange={(e) => this.imgchange(e)} id="choose" type="file"></input>
                                </label>
                            </div>
                        </div>
                        <div className="infbox">
                            <div className="myinf">
                                <p>昵　　称<Input onChange={(e) => this.nicknamechange(e)} ref="nickname" placeholder={this.state.userinf.nickname} style={{ width: "220px", margin: "5px" }} /></p>
                                <p>手机号码<Input readOnly="readOnly"  placeholder={this.state.userinf.phoneNum} style={{ width: "220px", margin: "10px" }} />(不能修改)</p>
                                <div className="sex">
                                    性　　别 
                                <Radio.Group style={{ marginLeft: "70px" }} onChange={(e) => this.sexchange(e)} defaultValue={this.getsex()}>
                                        <Radio.Button value="男">男</Radio.Button>
                                        <Radio.Button value="女">女</Radio.Button>
                                    </Radio.Group>
                                </div>

                                <p>密　　码<Input onChange={(e) => this.pwdchange(e)} type="password" placeholder={this.state.userinf.pwd} style={{ width: "220px", margin: "10px" }} /></p>
                                <Button onClick={this.infchange.bind(this)} style={{ float: "right", margin: "30px 20px" }} type="primary">保存</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}