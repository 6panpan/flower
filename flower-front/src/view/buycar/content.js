import React from 'react'
import './content.css'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
// 面包屑导航
import { Breadcrumb } from 'antd'
class Content extends React.Component {
  constructor(props) {
    super()
    this.state = {
      list: [],
      orderList:{}
    }
    
  }
  componentDidMount() {
    let id = this.props.flower_id
    console.log(id)
    axios.get('http://127.0.0.1:7001/getFlowersByID', {
        params: {
          id: id,
        },
      })
      .then((res) => {
        console.log(res.data)
        this.setState({
          list: res.data[0],
        })
        console.log(this.state.list)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  //数量增减
  sub() {
    let count = document.getElementById('num')
    if (count.innerHTML> 1) {count.innerHTML = Number(count.innerHTML) - 1
    } 
  }
  add() {
    document.getElementById('num').innerHTML = Number(document.getElementById('num').innerHTML) + 1
  }
  // 增加订单
 addOrder=()=>{

  if(this.getCookie("nickname")) {
    let num =document.getElementById("num");
    let orderObj = [];
    let order = {
      num:num.innerHTML,
      floewr_id:this.state.list.flower_id,
      name:this.state.list.flower_name,
      price:this.state.list.price,
      user_id:this.props.flower_id
    }
    if(this.getCookie("order")) {
      let orderList=this.getCookie("order"); 
      orderObj = JSON.parse(orderList);
      // console.log(orderObj);
      orderObj.push(order);
      // console.log(orderObj);
    } else {
      orderObj.push(order);
    }
    // console.log(orderObj);
    let str = JSON.stringify(orderObj);
    this.setCookie('order', str);
    // this.props.history.push("/buycar");
    console.log(this.props.history.push("/buycar"));
  } else {
    this.props.history.push({ pathname: "/login" });
  }
  }
  setCookie(name, value){
    //定义一天
    var days = 1;
    var exp = new Date();
    //定义的失效时间，
    exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);  
    //写入Cookie  ，toGMTstring将时间转换成字符串。
    document.cookie = name + "=" + `${value}` + ";expires=" + exp.toGMTString;
}
  getCookie(name){
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");     
    if(arr=document.cookie.match(reg)){
      return (arr[2]);
    }else{
      return null;
    }
}
  render() {
    return (
      <>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>首页</Breadcrumb.Item>
          <Breadcrumb.Item>{this.state.list.kind}</Breadcrumb.Item>
          <Breadcrumb.Item>{this.state.list.flower_name}</Breadcrumb.Item>
        </Breadcrumb>
        <div className="det-header">
          <div className="det-img">
        <img src={this.state.list.sample_url} width='100%' height='100%' alt=""/>
        
        </div>
          <div className="det-info">
            <h3 style={{ color: 'black' }}>{this.state.list.flower_name}</h3>
            {/* 信息 */}
            <div style={{ borderTop: '1px solid #ccc' }}>
              <p>材料：{this.state.list.material}</p>
              <p>包装：{this.state.list.packing}</p>
              <p>附送：下单填写留言，免费赠送贺卡</p>
              <p>配送：全国送货上门，市区免运费</p>

              <div className="price">
                价格：<span>￥{this.state.list.price}</span>
              </div>
              {/* 购买操作 */}
              <div className="info-oper">
                {/* 数量 */}
                <div>
                  数量：
                  <span type="button" onClick={this.sub} style={{ padding: '0 5px', backgroundColor: '#F0F0F0', border: '1px solid #ccc', cursor: 'pointer' }}>
                    -
                  </span>
                  <span id="num" style={{ padding: '0 10px', border: '1px solid #ccc' }}>
                    1
                  </span>
                  <span type="button" onClick={this.add} style={{ padding: '0 5px', backgroundColor: '#F0F0F0', border: '1px solid #ccc', cursor: 'pointer' }}>
                    +
                  </span>
                </div>
                {/* 加入购物车 */}
                <div className="info-buy">
                  {/* <Link to="/BuyCar"> */}
                    <button className="info-add" onClick={this.addOrder}>加入购物车</button>
                  {/* </Link> */}

                  <button className="info-tobuy">立即购买</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default  withRouter(Content)