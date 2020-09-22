import React from "react";
import "../assets/css/flowerItem.css";

class FlowerItem extends React.Component {
    constructor() {
        super();
    }
    toHuaInf() {
        // push佳轩和邓林的板块
        // this.props.history.push("/hua")
    }
    render() {
        return (
            <div onClick={this.toHuaInf.bind(this)} className="flowerItem">
                <img alt="" src={this.props.flowerInf.sample_url} />
                <span>{this.props.flowerInf.flower_name}</span>
                <div className="inf">
                    <span>￥{this.props.flowerInf.price}</span>
                    <span>销量{this.props.flowerInf.number}笔</span>
                </div>
            </div>
        );
    }
}

export default FlowerItem;
