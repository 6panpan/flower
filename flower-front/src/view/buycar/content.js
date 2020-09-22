import React from 'react'
import './content.css'
// import { Link } from 'react-router-dom'
import axios from 'axios'
// 面包屑导航
import { Breadcrumb } from 'antd'
export default class Content extends React.Component {
  constructor() {
    super()
    this.state = {
      list: [],
    }
  }
  componentDidMount() {
    let id = 1
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
    // console.log(this.state.list)
    let num =document.getElementById("num")
    console.log('num=',num.innerHTML)
    console.log("floewr_id",this.state.list.floewr_id)
    console.log("flower_name",this.state.list.flower_name)
    console.log("price",this.state.list.price)
    // let id=1;
    axios.post('http://127.0.0.1:7001/addOrder', 
    {
      flower_id:this.state.list.floewr_id,
      name:this.state.list.flower_name,
      price:this.state.list.price,
      num:num
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log("err-----")
        console.log(err)
      })
      // axios.get('http://127.0.0.1:7001/getOrderID', {
    //   params:{
    //   id:id
    //   }
    // }
    // )
    //   .then((res) => {
    //     console.log(res.data)
    //   })
    //   .catch((err) => {
    //     console.log("err-----")
    //     console.log(err)
    //   })
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
