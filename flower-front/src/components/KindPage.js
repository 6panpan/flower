import React from 'react';
import axios from 'axios';
import MySearch from "../view/MySearch"
import MyNav from "../view/MyNav"
import SortAll from "../components/sortAll";
import FlowerItem from "./FlowerItem"

class KingdPage extends React.Component {
    constructor() {
        super();
        this.state = {
            list: []
        }
    }
    componentWillMount() {
        // console.log(this.props.location.query)
        this.getAxios()
        // axios.get("http://127.0.0.1:7001/flowerByPurpose.do", {
        //     params: {
        //         purpose: this.props.location.query
        //     }
        // }).then(res => {
        //     this.setState({
        //         list: res.data
        //     })
        //     return
        // }).catch(err => {
        //     console.log("err")
        // })
    }
    getAxios(){
        console.log("------------------")
        console.log(this.props.location.query)
        axios.get("http://127.0.0.1:7001/flowerByPurpose.do", {
            params: {
                purpose: this.props.location.query
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
    showFlower() {
        // console.log(this.state.list)
        let list = this.state.list.map(el => {
            return <FlowerItem history={this.props.history} key={el.flower_id} flowerInf={el} />
        })
        return list
    } 
    toMain(){
        this.props.history.push("/")
    }
    render() {
        return (
            <div>
                <MySearch father={this} history={this.props.history}/>
                <MyNav father={this} history={this.props.history} />
                <p><span style={{cursor: "pointer"}} onClick={this.toMain.bind(this)}>首页</span>&gt;{this.props.location.query}</p>
                <SortAll />
                <div style={{display:"flex",justifyContent: "left",flexWrap:"wrap"}}>
                    {this.showFlower()}
                </div>
            </div>
        )
    }
}

export default KingdPage;
