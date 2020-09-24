// import axios from 'axios'
import React from 'react'
import './buycar.css';
// import '../js/buycarFonc'

export default class Buycar extends React.Component {
  constructor() {
    super()
    this.state = {
      // 订单表
      orderlist:JSON.parse(this.getCookie("order"))
      // [
      //   { id: 1, flower_id: 1, name: '玫瑰', num: 2, price: 239 },
      //   { id: 2, flower_id: 2, name: '满天星', num: 2, price: 199 },
      // ],
    }
  }
  componentDidMount() {
    console.log(this.state.orderlist);
    let that = this
    let list = this.state.orderlist
    console.log(list);
    // 获取cookie
    // let jsonStr = this.getCookie("order");
    // let orderNewObj = JSON.parse(jsonStr);
    // console.log(orderNewObj);
    // let
    let tbody = document.getElementById('mybuycar')
    for (let i = 0; i < list.length; i++) {
      let tr = document.createElement('tr')
      // 勾选框
      let check = document.createElement('input')
      check.type = 'checkbox'
      check.classList.add('check-single')

      let check_td = document.createElement('td')
      check_td.appendChild(check)
      tr.appendChild(check_td)

      // tbody.appendChild(tr)
      tr.innerHTML += `<td>${list[i].name}</td>
                  <td>${list[i].price}</td>
                  <td><button class='sub-num'>-</button><span class='buycarNum'>${list[i].num}</span><button class='add-num'>+</button></td>`
      //每一行删除按钮
      let delBtn = document.createElement('button')
      delBtn.innerHTML = '删除'
      delBtn.classList.add("del");


      let td = document.createElement('td')
      td.appendChild(delBtn)
      tr.appendChild(td)
      tbody.appendChild(tr)

      let checkall = document.getElementsByClassName('check-all')[0]
      let single = document.getElementsByClassName('check-single')
      // 点击全选按钮式，选中全部
      checkall.addEventListener('click', function (e) {
        for (let i = 0; i < single.length; i++) {
          single[i].checked = checkall.checked
        }
      })

     }
     tbody.addEventListener('click', function (e) {
      let checkall = document.getElementsByClassName('check-all')[0]
      // console.log(tbody)
      // console.log(e.target)
      // console.log(this.findIndex)
      // 获取当前点击项所在的tr在整个tbody的位置
      let index = that.findIndex(this, e.target)
      // 减少数量
      // let subtotal = e.target.parentNode.nextElementSibling
      // console.log(e.target.parentNode.parentNode)
      if (e.target.className.match('sub-num')) {
        // console.log(subtotal.innerHTML)
        list[index].num-=1
        e.target.nextElementSibling.innerHTML = list[index].num
        if (list[index].num === 1) {
          e.target.disabled = true
        }
        // 计算每个产品的小计
        // subtotal.innerHTML = (list[index].num * list[index].price).toFixed(2)
        list[index].total = (list[index].num * list[index].price).toFixed(2)

      } else if (e.target.className.match('add-num')) {
        // console.log("add")
        list[index].num+=1
        e.target.previousElementSibling.innerHTML = list[index].num

        if (list[index].num > 1) {
          e.target.parentNode.firstElementChild.disabled = false
          // console.log(e.target.parentNode.firstElementChild.disabled)
        }
        // 计算每个产品的小计
        // subtotal.innerHTML = (list[index].numb * list[index].price).toFixed(2)
        list[index].total = (list[index].numb * list[index].price).toFixed(2)
      } else if (e.target.className.match('del')) {
        // 找到tr标签
        e.target.parentNode.parentNode.remove()
        //更新数组中的数据
        list.splice(index, 1)
      } else if (e.target.className.match('check')) {
        let tr = e.target.parentNode.parentNode.parentNode.children
        let flag = true
        for (let i = 0; i < tr.length; i++) {
          // 获取所有的checkbox元素
          let checkbox = tr[i].firstElementChild.firstElementChild
          if (!checkbox.checked) {
            flag = false
            break
          }
        }
        // 如果所有的子项都选中,那么将全选按钮选中
        checkall.checked = flag
      }
      // 计算总价
    that.total()
    })
    this.total()
  }
  //parent表示tbody, current表示点击的按钮或者checkbox
  //要找到按钮或checkbox所在的tr在tbody的下标
  findIndex(parent, current) {
    // console.log(current)
    let tr = current.parentNode.parentNode
    // console.log(tr)
    let children = parent.children

    let index = -1
    for (let i = 0; i < children.length; i++) {
      if (children[i] === tr) {
        index = i
        break
      } else {
        index = -1
      }
    }
    return index
  }
  // 计算总价,参数表示所有checkbox所在tr对象， 3个tr
  total() {
    let sum = 0
    let single = document.getElementsByClassName('check-single')
    for (let i = 0; i < this.state.orderlist.length; i++) {
      // 判断每个checkbox是否被选中,如果选中,则计算价格
      if (single[i].checked) {
        sum += this.state.orderlist[i].num * this.state.orderlist[i].price
      }
    }
    console.log(sum)
    document.getElementsByClassName('total')[0].innerHTML = sum
  }
  // 存入cookie
  setCookie(name, value){
    //定义一天
    var days = 1;
    var exp = new Date();
    //定义的失效时间，
    exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);  
    //写入Cookie  ，toGMTstring将时间转换成字符串。
    document.cookie = name + "=" + `${value}` + ";expires=" + exp.toGMTString;
}
  // 取出cookie
  getCookie(name){
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");     
    if(arr=document.cookie.match(reg)){
      return (arr[2]);
    }else{
      return null;
    }
    
  }
  // 提交订单
  Submit() {
    alert("购买成功");
    // this.setCookie('order',"")
  }

  render() {
    return (
      <div className="buy-car">
        <table style={{ width: '70%', margin: '0 auto', border: '1px solid #ccc' }}>
          <thead>
            <tr>
              <th>
                <input className="check-all" type="checkbox" name="" id="" />
                全选
              </th>
              <th>商品</th>
              <th>价格</th>
              <th>数量</th>
              <th>操作</th>
            </tr>
          </thead>
          {/* 内容 */}
          <tbody id="mybuycar" style={{ textAlign: 'center' }}></tbody>
        </table>

        <h4 style={{ width: '70%', margin: '0 auto', textAlign: 'right' }}>
          总价：<span className="total"></span>
        </h4>
        <h4 className="buy-car-footer" onClick={this.Submit} style={{ width: '70%', margin: '0 auto', textAlign: 'right' }}>
          提交订单
        </h4>
      </div>
    )
  }
}
