import React from "react";
import axios from "axios";
import MySearch from "../view/MySearch";
import MyNav from "../view/MyNav";
import SortAll from "../components/sortAll";
import FlowerItem from "./FlowerItem";
import Nav from "../view/nav/Nav"

class KingdPage extends React.Component {
    constructor() {
        super();
        this.state = {
            list: [],
        };
    }
    componentWillMount() {
        this.getAxiosByPurpose();
    }

    getAxiosByPurpose() {
        // console.log("------------------")
        // console.log(this.props.location.query)
        axios.get("http://127.0.0.1:7001/flowerByPurpose.do", {
            params: {
                purpose: this.props.location.query
            }
        }).then(res => {
            this.setState({
                list:res.data
            })
        }).catch(err => {
            console.log("err")
        })
    }

    getAxios() {
        axios
            .get("http://127.0.0.1:7001/allFlower.do", {
                params: {
                    flower_name: this.props.location.query,
                    purpose: this.props.location.query,
                    kind: this.props.location.query,
                    num: this.props.location.query,
                },

            })
            .then(res => {
                this.setState({
                    list: res.data,
                });
                console.log("/allFlower");
                return;
            })
            .catch(err => {
                console.log("err");
            });
    }
    showFlower() {
        // console.log(this.state.list)
        let list = this.state.list.map(el => {
            return <FlowerItem history={this.props.history} key={el.flower_id} flowerInf={el} />
        })
        return list
    }
    toMain() {
        this.props.history.push("/")
    }
    render() {
        return (
            <div>
                <Nav/>
                <MySearch  father={this} history={this.props.history} />
                <MyNav father={this} history={this.props.history} />

                <p><span style={{ cursor: "pointer" }} onClick={this.toMain.bind(this)}>首页</span>&gt;{this.props.location.query}</p>
                <SortAll father={this} history={this.props.history}/>
                <div style={{ display: "flex", justifyContent: "left", flexWrap: "wrap" }}>
                    {this.showFlower()}
                </div>
            </div>
        );
    }
}

export default KingdPage;
