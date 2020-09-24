import React from 'react';
import axios from 'axios';
import { Breadcrumb } from 'antd';
import { Menu } from 'antd';

import '../../assets/css/Person.css';
import Nav from '../../view/nav/Nav.js';
// import Lefthead from './LeftHead';
import Rigthcontent from './RigthContent';
import MySearch from '../../view/MySearch';


export default class Person extends React.Component {
    constructor(){
        super()
        this.state={
            jump_id: 0,
            guding:3
        }
    }
    Jump(e){
        this.setState({
            jump_id : e.key
        }    
        )
        console.log(this.state.jump_id);
    }
    render() {
        return (
            <>
                <div>
                    <Nav></Nav>
                    <div>
                        <MySearch/>
                    </div>
                    <div>
                        <Breadcrumb separator=">">
                            <Breadcrumb.Item href="/">首页</Breadcrumb.Item>
                            <Breadcrumb.Item href="">会员中心</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className='main'>
                        <div className='sider'>
                            会员中心
                            <Menu onClick={this.Jump.bind(this)} title="会员中心">
                                <Menu.Item key='0'>会员首页</Menu.Item>
                                <Menu.ItemGroup key="g1" title="订单信息">
                                    <Menu.Item key="1">我的订单</Menu.Item>
                                    <Menu.Item key="3">我的评价</Menu.Item>
                                </Menu.ItemGroup>
                                <Menu.ItemGroup key="g2" title="积分管理">
                                    <Menu.Item key="4">我的积分</Menu.Item>
                                    <Menu.Item key="5">积分兑换</Menu.Item>
                                </Menu.ItemGroup>
                                <Menu.ItemGroup key="g3" title="账户设置">
                                    <Menu.Item key="6">个人信息</Menu.Item>
                                    <Menu.Item key="9">生日/纪念日提醒</Menu.Item>
                                </Menu.ItemGroup>
                                <Menu.ItemGroup key="g4" title="付款设置">
                                    <Menu.Item key="11">我的虚拟账户</Menu.Item>
                                    <Menu.Item key="12">我的优惠券</Menu.Item>
                                    <Menu.Item key="13">我的权益卡</Menu.Item>
                                    <Menu.Item key="14">在线补款</Menu.Item>
                                </Menu.ItemGroup>
                                <Menu.ItemGroup key="g5" title="客户服务">
                                    <Menu.Item key="15">客服留言</Menu.Item>
                                    <Menu.Item key="16">投诉留言</Menu.Item>
                                    <Menu.Item key="17">在线客服</Menu.Item>
                                </Menu.ItemGroup>
                            </Menu>
                        </div>
                        <div className='content'>
                            <Rigthcontent page={this.state.jump_id}/>
                        </div>
                    </div>



                </div>
            </>
        )
    }
}