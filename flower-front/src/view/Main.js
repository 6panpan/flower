import React from 'react';
import MySearch from "./MySearch"
import MyNav from "./MyNav"
import Lunbo from "./Lunbo"
import other from "../assets/img/other.png"
import FlowerList from "./FlowerList"
class Main extends React.Component {
    render() {
        return (
            <div>
                <MySearch />
                <MyNav style={{ zIndex: "10" }} flas={true} history={this.props.history} />
                <Lunbo />
                <img style={{ width: "1200px" }} alt="" src={other} />
                <FlowerList history={this.props.history} />
            </div>
        )
    }
}

export default Main;
