import React from 'react';
import FlowerKind from "../components/FlowerKind"
class FlowerList extends React.Component {
    constructor() {
        super();
        this.state = {
            mainKind: [
                { id: 1, kind: "爱情鲜花", topic: "https://cs.dinghuale.com/uploads/20200624/202006241117412831.jpg" },
                { id: 2, kind: "友情鲜花", topic: "https://cs.dinghuale.com/uploads/20200624/202006241319037651.jpg" },
                { id: 3, kind: "鲜花礼盒", topic: "https://cs.dinghuale.com/uploads/20200624/202006241155328760.png" },
                { id: 4, kind: "开业花篮", topic: "https://cs.dinghuale.com/uploads/20200624/202006241326302151.jpg" },
                { id: 5, kind: "绿植", topic: "https://cs.dinghuale.com/uploads/20200624/202006240927558865.jpg" },
            ],

        }
    }
    allKind() {
        let list = this.state.mainKind.map((el) => {
            return <FlowerKind history={this.props.history} key={el.id} kindInf={el} />
        })
        return list
    }
    render() {
        return (
            <div>
                {this.allKind()}
            </div>
        )
    }
}

export default FlowerList;
