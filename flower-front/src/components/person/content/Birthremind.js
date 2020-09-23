import React from 'react';
import ShowRemind from "../ShowRemind"
import AddRemind from "../AddRemind"
import { Button } from 'antd';

export default class Order extends React.Component {
    constructor() {
        super()
        this.state = {
            flag: false
        }
    }
    showadd() {
        let add = document.getElementsByClassName("add")[0]
        let show = document.getElementsByClassName("show")[0]
        let btn1 = document.getElementsByClassName("btn1")[0]
        let btn2 = document.getElementsByClassName("btn2")[0]
        console.log(add);
        if (!this.state.flag) {
            show.style.display = "none"
            add.style.display = "block"
            btn2.style.display = "block"
            btn1.style.display = "none"
            this.state.flag=true
        }else{
            show.style.display = "block"
            add.style.display = "none"
            btn2.style.display = "none"
            btn1.style.display = "block"
            this.state.flag=false
        }
    }

    render() {
        return (
            <>
                <b style={{ display: "inline-block", marginBottom: "20px", fontSize: "20px" }}>生日/纪恋日提醒</b>
                <div className="addbtn">
                    <Button className="btn1" type="primary" onClick={this.showadd.bind(this)} >
                    新增生日/纪念日提醒+
                    </Button>
                    <Button className="btn2" type="primary" onClick={this.showadd.bind(this)}  style={{display:"none"}}>
                    生日/纪念日
                    </Button>
                </div>

                <div className="show">
                    <ShowRemind></ShowRemind>
                </div>

                <div className="add" style={{ display: "none" }}>
                    <AddRemind></AddRemind>
                </div>


            </>
        )

    }
}