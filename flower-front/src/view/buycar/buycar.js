// import axios from 'axios'
import React from 'react'
// import '../js/buycarFonc'

export default class Buycar extends React.Component {
  constructor() {
    super()
    this.state = {
      // 订单表
      orderlist: [
        { id: 1, flower_id: 1, name: '玫瑰', num: 2, price: 239 },
        { id: 2, flower_id: 2, name: '满天星', num: 2, price: 199 },
      ],
    }
  }
  componentDidMount() {
    let list = this.state.orderlist
    console.log(list)
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
      
      
      // let subNum = document.getElementsByClassName('sub-num')[i]
      // let addNum = document.getElementsByClassName('add-num')[i]
      // subNum.addEventListener('click', function () {
      //   let count = document.getElementsByClassName('buycarNum')[i]
      //   if (count.innerHTML > 1) {
      //     count.innerHTML = Number(count.innerHTML) - 1
      //   }
      // })
      // addNum.addEventListener('click', function () {
      //   document.getElementsByClassName('buycarNum')[i].innerHTML = Number(document.getElementsByClassName('buycarNum')[i].innerHTML) + 1
      // })
      //每一行删除按钮
      let delBtn = document.createElement('button')
      delBtn.innerHTML = '删除'

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
    // 计算总价
    this.total()
  }
  operate(e) {
    
    let tbody = document.getElementById('mybuycar')
    let checkall = document.getElementsByClassName('check-all')[0]
    console.log(tbody)
    console.log(e)
    // console.log(this.findIndex)
    // // 获取当前点击项所在的tr在整个tbody的位置
    // let index = this.findIndex(this, e.target);
    // console.log(index)
    // // 减少数量
    // let subtotal = e.target.parentNode.nextElementSibling;
    // if (e.target.className.match("sub")) {
    //   this.orderlist[index].number--;
    //     e.target.nextElementSibling.innerHTML = this.orderlist[index].number;
    //     if (this.orderlist[index].number === 1) {
    //         e.target.disabled = true;
    //     }
    //     // 计算每个产品的小计
    //     subtotal.innerHTML = (this.orderlist[index].number * this.orderlist[index].price).toFixed(2);
    //     this.orderlist[index].total = (this.orderlist[index].number * this.orderlist[index].price).toFixed(2);

    // } else if (e.target.className.match("add")) {
    //     // console.log("add")
    //     this.orderlist[index].number++;
    //     e.target.previousElementSibling.innerHTML = this.orderlist[index].number;

    //     if (this.orderlist[index].number > 1) {
    //         e.target.parentNode.firstElementChild.disabled = false;
    //         // console.log(e.target.parentNode.firstElementChild.disabled)
    //     }
    //     // 计算每个产品的小计
    //     subtotal.innerHTML = (this.orderlist[index].number * this.orderlist[index].price).toFixed(2);
    //     this.orderlist[index].total = (this.orderlist[index].number * this.orderlist[index].price).toFixed(2);

    // } else if (e.target.className.match("del")) {
    //     // 找到tr标签
    //     e.target.parentNode.parentNode.remove();
    //     //更新数组中的数据
    //     this.orderlist.splice(index, 1);
    // } else if (e.target.className.match("check")) {
    //     let tr = e.target.parentNode.parentNode.parentNode.children;
    //     let flag = true;
    //     for (let i = 0; i < tr.length; i++) {
    //         // 获取所有的checkbox元素
    //         let checkbox = tr[i].firstElementChild.firstElementChild;
    //         if (!checkbox.checked) {
    //             flag = false;
    //             break;
    //         }
    //     }
    //     // 如果所有的子项都选中,那么将全选按钮选中
    //     checkall.checked = flag;

    // }
  }

  findIndex(parent, current) {
    let tr = current.parentNode.parentNode;
    let children = parent.children;

    let index = -1;
    for (let i = 0; i < children.length; i++) {
        if (children[i] === tr) {
            index = i;
            break;
        } else {
            index = -1;
        }
    }
    return index;
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
    document.getElementsByClassName('total')[0].innerHTML = sum
  }
  render() {
    return (
      <div className="buy-car" style={{ width: '100%' }}>
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
          <tbody id="mybuycar" onClick={this.operate.bind(this)} style={{ textAlign: 'center' }}></tbody>
        </table>

        <h4 className="total" style={{ width: '70%', margin: '0 auto', textAlign: 'right' }}>
          总价：
        </h4>
      </div>
    )
  }
}
