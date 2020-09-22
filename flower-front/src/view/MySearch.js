import React from 'react';
import "../assets/css/MySearch.css"
import { Input } from 'antd';
// import {CustomerServiceOutlined,PhoneOutlined} from '@ant-design/icons';
import logo from "../assets/img/logo.png"

const { Search } = Input;

class App extends React.Component {
    render() {
        return (
            <div id="mySearchBox">
                <img src={logo} alt="" />
                <Search
                    placeholder="商品搜索"
                    enterButton="搜索"
                    size="large"
                    style={{width:"400px"}}
                    onSearch={value => console.log(value)}
                />
                <div> 
                    <span id="tel">{/* <PhoneOutlined /> */} 400-123-456</span>
                    <span>{/* <CustomerServiceOutlined /> */} 在线客服</span>
                </div>
            </div>
        )
    }
}

export default App;
