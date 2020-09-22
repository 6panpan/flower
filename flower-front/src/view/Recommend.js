import React from "react";
import '../assets/css/Recommend.css';
import axios from 'axios';
export default class Recommend extends React.Component {
    constructor() {
        super();
        this.state = {
            list: []
        };
    };
    componentDidMount() {
        axios.get('http://127.0.0.1:7001/getFlowers')
          .then((res) => {
            this.setState({
              list: res.data
            })
          })
    };
    getFlowers() {
        return this.state.list.map(item => {
            return (
                <div key={item.flower_id} className="rec-con">
                    <div className="rec-con-img">
                        <img src={item.sample_url}></img>
                    </div>
                    <p className="rec-con-name"> {item.flower_name} </p>
                    <p className="rec-con-price"><span>￥</span> {item.price} </p>
                </div>
            )
          })
    };
    render() {
        return (
            <div className="rec-box">
                <div className="rec-title">
                    热销推荐
                </div>
                {this.getFlowers()}
            </div>
        );
    }
}