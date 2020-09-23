import React from 'react';
import { FileDoneOutlined, RedEnvelopeOutlined, UserOutlined } from '@ant-design/icons';


export default class Member extends React.Component {
    constructor() {
        super()
        this.state = {
            member: '普通会员',
            paying: 0,//待支付
            evaluate: 0,//待评价
            overage: 0,//余额
            integral: 0,//积分f v
        }
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
    componentDidMount() {
        this.getname()
    }
    getname(){
        let nickname=this.getCookie("nickname")
        console.log(nickname);
        this.setState=({
            nickname:nickname
        })
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
                                {this.state.nickname}
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
                    </div>
                </div>
                <div className='why-vip'>
                    <h6>如何成为VIP</h6><hr/>
                    <p>您在花了么成功购物一次，送货完毕后系统将自动将您的会员级别升至VIP，享受鲜花最高9折优惠。</p>
                    <p>会员级别将在送货完毕后一个工作日内完成升级，重大节日（即情人节、母亲节、七夕节、圣诞节和春节）需二个工作日左右。</p>
                </div>
                <div className='collection'>
                    <span className='mycollection'>我的收藏</span>
                    <p>您好，您还没有收藏商品</p>
                </div>
                
            </>
        )
    }
}