import React from 'react';

export default class Order extends React.Component{
    constructor(){
        super();
        this.state={
            integral:0,
            notes:'您好，暂无订购记录。'
        }
        
    }
    render(){
        return (
            <>
        <div className='my-integral'>
        我的积分
        </div>
        <div className='integral-text'>
        <p>您当前的积分：{this.state.integral}</p>
        <hr></hr>
        <dl>
            <dt> 1、如何使用积分：</dt>
            <dd>■ 100积分抵扣1人民币，每单最多用积分抵扣订单金额的20%</dd>
            <dd>■ 消费时可使用积分的数量是500的整数倍，如500、1000、1500等积分</dd>
            <dd>■ 如果拥有的积分数小于500个，则不可在提交订单页使用积分支付</dd>
            <dd>■ 您可以在“我的-积分-积分兑换”中进行兑换优惠券或小礼品</dd>
        </dl>
        <dl>
            <dt>2、如何获取积分：</dt>
            <dd>■ 订单送货完毕后可按实付金额1:1比例获取积分</dd>
            <dd>■ 评价订单中第1个商品：纯文字评论，送300积分；晒图+文字评论，送500积分；晒2张图+文字评论，送600积分；晒3张图或以上+文字评论，送700积分</dd>
            <dd>■ 评价订单中第2个商品或更多商品时，每多一个评价送100积分</dd>
        </dl>
        <dl>
            <dt>3、积分有效期：</dt>
            <dd>■ 积分有效期为一年(365天)，可通过下单延长有效期。系统将分别在每笔积分获取一年后对该笔未使用积分作过期清零处理，如在此一年内有下单，则积分有效期顺延一年</dd>
            <dd>■ 例如2019.2.26系统将判断2018.2.25~2019.2.25期间是否有下单，如无有效订单，清空2018.2.25获取但未使用的积分；如有有效订单则积分有效期顺延一年</dd>
        </dl>
        <h2>积分交易记录</h2>
        <p className='jilu'>{this.state.notes}</p>
       




        </div>
        </>
        )
        
    }
}