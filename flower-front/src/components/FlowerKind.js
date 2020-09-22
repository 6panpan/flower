import React from 'react';
import axios from "axios";
import "../assets/css/FlowerKind.css";
import FlowerItem from "./FlowerItem"


class FlowerKind extends React.Component {
    constructor() {
        super();
        this.state = {
            list: []
        }
    }
    flowerShow() {
        // console.log(this.state.list)
        let list = this.state.list.map(el => {
            return <FlowerItem history={this.props.history} key={el.flower_id} flowerInf={el} />
        })
        return list
    }
    componentWillMount() {
        axios.get("http://127.0.0.1:7001/flowerByPurpose.do", {
            params: {
                purpose: this.props.kindInf.kind
            }
        }).then(res => {
            this.setState({
                list: res.data
            })
            return
        }).catch(err => {
            console.log("err")
        })
    }
    render() {
        return (
            <div className="kindBox">
                <div className="kindTitle">
                    <p>{this.props.kindInf.kind}</p>
                    <span>查看更多</span>
                </div>
                <div id="box">
                    <img slt="" src={this.props.kindInf.topic} />
                    <div className="flowerBox">
                        {this.flowerShow()}
                    </div>
                </div>
            </div>
        )
    }
}

export default FlowerKind;
