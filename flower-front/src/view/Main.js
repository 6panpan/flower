import React from "react";
import MySearch from "./MySearch";
import MyNav from "./MyNav";
import Lunbo from "./Lunbo";
import other from "../assets/img/other.png";
import FlowerList from "./FlowerList";
import Nav from "../view/nav/Nav";
import bottom from "../../src/image/bottom.png"

class Main extends React.Component {
    render() {
        return (
            <div>

                <div>
                <Nav history={this.props.history} />
                <MySearch flas={true} history={this.props.history} />
                <MyNav style={{ zIndex: "10" }} flas={true} history={this.props.history} />

                <Lunbo />
                <img style={{ width: "1200px" }} alt="" src={other} />
                <FlowerList history={this.props.history} />
                </div>
                <div style={{display:"flex",flexDirection:"row",marginTop:"30px",marginBottom:"30px"}}>
                    <img style={{width:"1200px"}} src={bottom}></img>
                </div>
            </div>
        );
    }
}

export default Main;
