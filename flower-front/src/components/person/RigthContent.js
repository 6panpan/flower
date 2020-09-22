import React from 'react';
import { FileDoneOutlined, RedEnvelopeOutlined, UserOutlined } from '@ant-design/icons';


export default class Right extends React.Component {
    constructor() {
        super()
        this.state = {
            username: 'liuxing',
            member: '普通会员',
            paying: 0,//待支付
            evaluate: 0,//待评价
            overage: 0,//余额
            integral: 0,//积分
            coupon: 0,//优惠券
        }
    }
    upAvator() {

    }
    render() {
        return (
            <>
                <span className="toptext">
                    您好，欢迎进入会员中心
                </span>
                <div className='own'>
                    <div className="own-left">
                        <div className='avatar' onClick={this.state.upAvator}>
                            <UserOutlined className='avator-icon icon' />
                        </div>
                        <div className='namer'>
                            <span>
                                {this.state.username}
                            </span>
                            <span>
                                {this.state.member}
                            </span>
                        </div>
                    </div>
                    <div className='own-mid'>
                        <div>
                            <div className='wait-paying' >
                                <RedEnvelopeOutlined style={{ color: '#FF6161' }} />
                            </div>
                            <span>待付款 {this.state.paying}</span>
                        </div>
                        <div>
                            <div className='wait-evaluate' >
                                <FileDoneOutlined style={{ color: '#FF6161' }} />
                            </div>
                            <span>待评价 {this.state.evaluate}</span>
                        </div>
                    </div>
                    <div className='own-right'>
                        <p>余额：{this.state.overage}</p>
                        <p>积分：{this.state.integral}</p>
                        <p>优惠券：{this.state.coupon}</p>
                    </div>
                </div>
            </>
        )
    }
}