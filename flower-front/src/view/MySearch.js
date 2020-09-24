import React from "react";
import "../assets/css/MySearch.css";
import { Input } from "antd";
import logo from "../assets/img/logo.png";

const { Search } = Input;
class App extends React.Component {
    kindPage(e) {
        // console.log(e);
        let path;
        if (e) {
            path = "/flower/" + e;
        }
        // console.log(path);

        if (path) {
            // console.log(this.props.history);
            this.props.history.push({ pathname: path, query: e });
            if(this.props.father){
                this.props.father.getAxios(e)
            }
        }
    }
    render() {
        return (
            <div id="mySearchBox">
                <img src={logo} alt="" style={{ width: "70px", height: "70px" }} />
                <Search
                    placeholder="商品搜索"
                    enterButton="搜索"
                    size="large"
                    style={{ width: "400px" }}
                    onSearch={this.kindPage.bind(this)}
                />
                <div>
                    <span id="tel">

                        400-123-456
                    </span>
                    <span>
                        在线客服
                    </span>
                </div>
            </div>
        );
    }
}

export default App;
