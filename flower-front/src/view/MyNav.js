import React from "react";
import "../assets/css/MyNav.css";
import Kinds from "../components/Kinds";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            kinds: ["鲜花", "花束", "礼盒", "花篮", "周花", "绿植", "永生花", "中秋节鲜花"],
        };
    }
    sortList() {
        let list = this.state.kinds.map(el => {
            return <span key={el}>{el}</span>;
        });
        return list;
    }
    kindPage(e) {
        // console.log(e.target.innerHTML)
        let path;
        if (e.target.innerHTML) {
            path = "/flower/" + e.target.innerHTML;
        }
        if (path) {
            this.props.history.push({ pathname: path, query: e.target.innerHTML });
        }
    }
    kindsShow() {
        if (this.props.flas) {
            return <Kinds />;
        }
    }
    render() {
        return (
            <>
                <div onClick={this.kindPage.bind(this)} id="navBox">
                    <div>
                        <div id="allSort">所有分类</div>
                        {this.kindsShow("true")}
                    </div>
                    <div id="sortEl">{this.sortList()}</div>
                </div>
            </>
        );
    }
}

export default App;
