import React from 'react';
import {FileDoneOutlined } from '@ant-design/icons';


export default class Right extends React.Component {
    constructor() {
        super()
        this.state = {
            username: 'liuxing',
            member: '普通会员',
            overage: 0,
            integral: 0,
            coupon: 0,
        }
    }
    render() {
        return (
            <>
                <span className="toptext">
                    您好，欢迎进入会员中心
                </span>
                <div className='own'>
                    <div className="own-left">
                        <div className='avatar'></div>
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
                            <div className='wait-paying' ></div>

                        </div>
                        <div>
                            <div className='wait-evaluate' >
                            <FileDoneOutlined style={{color:'#FF6161'}}/>
                            </div>
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