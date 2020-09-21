import React from 'react';
import { Breadcrumb } from 'antd';
import { Layout } from 'antd';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

export default class Sider extends React.Component {

    render() {
        return (
            <>
                <Menu title="会员中心">
                    <Menu.Item>会员首页</Menu.Item>
                    <Menu.ItemGroup key="g1" title="订单信息">
                        <Menu.Item key="1">我的订单</Menu.Item>
                        <Menu.Item key="2">已取消订单</Menu.Item>
                        <Menu.Item key="3">我的评价</Menu.Item>

                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="g2" title="积分管理">
                        <Menu.Item key="4">我的积分</Menu.Item>
                        <Menu.Item key="5">积分兑换</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="g3" title="账户设置">
                        <Menu.Item key="6">个人信息</Menu.Item>
                        <Menu.Item key="7">账号和绑定</Menu.Item>
                        <Menu.Item key="8">常用收货人</Menu.Item>
                        <Menu.Item key="9">生日/纪念日提醒</Menu.Item>
                        <Menu.Item key="10">我的收藏</Menu.Item>
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
            </>
        )
    }
}