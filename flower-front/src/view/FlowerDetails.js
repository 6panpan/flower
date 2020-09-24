// import React from "react";

import React, { Component } from "react";
import '../assets/css/FlowerDetails.css';
import axios from 'axios';
import { Tabs } from 'antd';
// import { LoginOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;
// export default class FlowerDetails extends React.Component
class FlowerDetails extends Component{
    constructor(props) {
        super();
        this.state = {
            flowerList: [],
            userList: [],
            isShow: false,
            id: props.flower_id
        };
    };
    componentDidMount() {
        axios.get('http://127.0.0.1:7001/getFlowersByID', {
            params: {
                id: this.state.id
            }
        }).then((res) => {
            this.setState({
                flowerList: res.data[0]
            })
        }).catch(err => {
            console.log(err);
        });
        // 获取用户评价
        axios.get('http://127.0.0.1:7001/getBuyByID', {
            params: {
                id: this.state.id
            }
        }).then((res) => {
            this.setState({
                userList: res.data,
                users: `用户评价（ ${res.data.length} ）`
            })
        }).catch(err => {
            console.log(err);
        })
    };
    render() {
        return (
            <div className="det-con">
                <Tabs type="card">
                    <TabPane tab="商品详情" key="1">
                        <div className="det-con-top">
                            <div className="det-top-left">产品参数</div>
                            <div className="det-top-right">
                                <p><span>编号</span>{this.state.flowerList.number}</p>
                                <p><span>类别</span>{this.state.flowerList.kind}</p>
                                <p><span>包装</span>{this.state.flowerList.packing}</p>
                                <p><span>附送</span>下单填写留言，即免费赠送精美贺卡！</p>
                            </div>
                        </div>
                        <div className="det-con-bot">
                            <img src={this.state.flowerList.details1_url} />
                            <img src={this.state.flowerList.details2_url} />
                            <img src={this.state.flowerList.details3_url} />
                        </div>
                    </TabPane>
                    <TabPane tab={this.state.users} key="2">
                        {this.getBuyByID()}
                        {this.showImg()}
                    </TabPane>

                </Tabs>
            </div>
        );
    }
    changeImg(img) {
        this.setState({
            bigImg: img,
            isShow: true,
        })
    };
    changeShow() {
        this.setState({
            isShow: false
        })
    }
    showImg() {
        if (this.state.isShow) {
            return (
                <div onClick={this.changeShow.bind(this)} className="bigimg-box">
                    <img className="bigimg" src={this.state.bigImg} />
                </div>

            )
        }

    }
    getTime(time) {
        time = time.substr(0,19)
        let timeArr = time.split("T");
        let year = timeArr[0].split("-")[0]
        let month = timeArr[0].split("-")[1];
        if(month.substr(0,1)==0) {
            month=month.substr(1,1)
        }
        let day = timeArr[0].split("-")[2]
        if(day.substr(0,1)==0) {
            day=day.substr(1,1)
        }
        let date = new Date();
        if(year==date.getFullYear()&& month==date.getMonth() && day==date.getDate()) {
            return `${date.getHours()-parseInt(timeArr[1].split("-")[0])} 小时前` ;
        }
        return time.substr(0,10)
    }
    getBuyByID() {
        return this.state.userList.map(item => {
            return (
                <div className="userbuy" key={item.user_id}>
                    <div className="userbuy-left">
                        <img className="user-img" src={item.headimg} />
                        <p className="user-name">{item.nickname}</p>
                    </div>
                    <div className="userbuy-right">
                        <p>{item.evaluate}</p>
                        <div className="buyimg-box">
                            <div onClick={this.changeImg.bind(this, item.buy1_url)} className="buyimg">
                                <img src={item.buy1_url} />
                            </div>
                            <div onClick={this.changeImg.bind(this, item.buy2_url)} className="buyimg">
                                <img src={item.buy2_url} />
                            </div>
                        </div>
                        <p>{this.getTime(item.evaluate_time)}</p>
                    </div>
                </div>
            )
        })
    };
   
}

export default FlowerDetails