import React from 'react';
import MySearch from "./MySearch"
import MyNav from "./MyNav"
import Lunbo from "./Lunbo"
import other from "../assets/img/other.png"

class Main extends React.Component {
    render() {
        return (
            <div>
                <MySearch />
                <MyNav flas={true} history={this.props.history} /> 
                <Lunbo />
                <img style={{width:"1200px"}} src={other} />
            </div>
        )
    }
}

export default Main;
