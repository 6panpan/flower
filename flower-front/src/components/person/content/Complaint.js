import React from 'react';
import { Input } from 'antd';
import { Button } from 'antd';

export default class Complaint extends React.Component{
    constructor(){
        super()
        this.state={

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
    componentDidMount() {
        this.someinf()
        console.log(this.state.nickname);
    }
    someinf(){
        let nickname=this.getCookie("nickname")
        let phoneNum=this.getCookie("phoneNum")
        this.setState({
            nickname:nickname,
            phoneNum:phoneNum
        })
    }
    submit(){
        alert("提交成功")
    }
    render(){
        return (
            <>
        <div style={{backgroundColor:"rgb(238, 238, 238)",height:"40px",lineHeight:"40px"}}><b>投诉留言</b></div>
        
        <div style={{backgroundColor:"rgb(238, 238, 238)",margin:"30px 30px"}}>
            <span>*您的姓名:</span><Input style={{ width: "240px", margin: "10px" }} placeholder={this.state.nickname}/>
            <span>*您的手机:</span><Input style={{ width: "240px", margin: "10px" }} placeholder={this.state.phoneNum} />
            <br></br>
            <span>*投诉单号:</span><Input style={{ width: "240px", margin: "10px" }}  placeholder="请输入单号"/>
            <br></br>
            <span>留言内容:</span><br></br>
            <textarea style={{ width: "850px",height:"150px", margin: "10px" }}>

            </textarea>
            <br></br>
            <Button style={{ display:"flex",margin:"auto"}} type="submit" onClick={this.submit.bind(this)}>提交</Button>
        </div>
        </>
        )
        
    }
}