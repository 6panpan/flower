import React, { Component } from "react"
import axios from "axios";
import "../../assets/css/remind.css"
import { Input } from 'antd';
import { Button } from 'antd';
import { Radio } from 'antd';
import ShowRemind from "./ShowRemind";

export default class AddRemind extends Component {
    constructor() {
        super();
        this.state = {
            sex: "男"
        }
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
    addRemind() {
        console.log(this.state.birth);
        console.log(this.state.name);
        console.log(this.state.sex);
        console.log(this.state.mark);
        let re_id = this.getCookie("user_id")
        if (this.state.birth !== undefined && this.state.name !== undefined && this.state.sex !== undefined) {
            axios.post("http://127.0.0.1:7001/addRemind", {
                re_id: re_id,
                re_name: this.state.name,
                re_sex: this.state.sex,
                re_birth: this.state.birth,
                re_mark: this.state.mark
            }).then(res => {
                console.log(res);
                alert("添加成功")
                return <ShowRemind></ShowRemind>
            }).catch(err => {
                console.log(err);
            })
        }else{
            alert("请填写正确信息")
        }

    }
    birthchange(e) {
        this.setState({
            birth: e.target.value
        })
    }
    namechange(e) {
        this.setState({
            name: e.target.value
        })
    }
    sexchange(e) {
        this.setState({
            sex: e.target.value
        })
    }
    markchange(e) {
        this.setState({
            mark: e.target.value
        })
    }
    render() {
        return (
            <>
                <b style={{fontSize:"20px"}}>添加纪念日</b>
                <div className="addbox">
                    <p>*姓名：<Input onChange={(e) => this.namechange(e)} placeholder="请输入姓名" style={{ width: "240px", margin: "10px" }} /></p>
                    <div className="sex">
                        *性别：
                        <Radio.Group style={{ marginLeft: "70px" }} onChange={(e) => this.sexchange(e)} defaultValue={this.state.sex}>
                            <Radio.Button value="男">男</Radio.Button>
                            <Radio.Button value="女">女</Radio.Button>
                        </Radio.Group>
                    </div>
                    <p>*生日：<Input onChange={(e) => this.birthchange(e)} type="date" style={{ width: "240px", margin: "10px" }} /></p>
                    <p>其他备注<br></br>
                        <textarea style={{ width: "300px", margin: "10px" }} onChange={(e) => this.markchange(e)}></textarea>
                    </p>
                    <Button onClick={this.addRemind.bind(this)} style={{ float: "right", margin: "30px 20px" }} type="primary">确认添加</Button>
                </div>


            </>
        )
    }
}