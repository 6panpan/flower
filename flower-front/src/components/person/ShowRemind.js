import React, { Component } from "react"
import axios from "axios";
import "../../assets/css/remind.css"
// import AddRemind from "./AddRemind"

export default class ShowRemind extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  componentDidMount() {
    this.getRemind()
    console.log(this.state.myarr);
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
  getRemind() {
    let re_id = this.getCookie("user_id")
    axios.post("http://127.0.0.1:7001/getRemind", {
      re_id: re_id,
    }).then(res => {
      console.log(res.data);
      this.setState({
        myarr: res.data
      })
    }).catch(err => {
      console.log(err);
    })
  }
 
  showList() {
    console.log(this.state.myarr);
    if (this.state.myarr) {
      let list = this.state.myarr.map(el => {
        let mybirth=el.re_birth.slice(0,10)
        return (
          <tr className="t1" key={el.id}>
            <td>{el.re_name}</td>
            <td>{mybirth}</td>
            <td>计算</td>
            <td className="mark">{el.re_mark}</td>
            <td>
              <span>查看</span>　　　　<span onClick={this.delRemind.bind(el)}>删除</span>
            </td>
          </tr>
        )
      })
      return list
    }
    
  }
  delRemind(){
      let id=this.id
      console.log(id);
      if (id) {
        axios.post("http://127.0.0.1:7001/delRemind",{
          id:id
        }).then(res=>{
            alert("删除成功")
            this.props.history.go(0) 
        }).catch(err=>{
          console.log(err);
        })
      }
  }
  render() {
    return (
      <>
        <br></br>
        <div className="showbox">
          <table className="mytb" style={{ position: "relative" }}>
            <tbody>
              <tr>
                <th>姓名</th>
                <th>日期</th>
                <th>距今天</th>
                <th style={{ width: "300px" }}>备注</th>
                <th>操作</th>
              </tr>
            </tbody>
          </table>
          {this.showList()}
        </div>
      </>
    )
  }
}