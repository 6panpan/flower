import React from "react";
import "../assets/css/sortAll.css";

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            kinds: ["鲜花", "花束", "礼盒", "花篮", "周花", "绿植", "永生花", "中秋节鲜花"],
            purpose: [
                "爱情鲜花",
                "生日鲜花",
                "友情鲜花",
                "探病问候",
                "道歉鲜花",
                "问候长辈",
                "感谢老师",
                "哀思鲜花",
                "商务鲜花",
            ],
            huacai: ["玫瑰", "百合", "康乃馨", "向日葵", "满天星", "郁金香", "菊花"],
            num: ["11枝", "19枝", "21枝", "33枝", "52枝", "66枝", "99枝"],
        };
    }
    sortList(lists) {
        let r = lists.map(el => {
            return <span key={el}>{el}</span>;
        });
        return r;
    }
    changePath(e) {
        // console.log(e.target.innerHTML)
        let path;
        if (e.target.innerHTML) {
            path = "/flower/" + e.target.innerHTML;
        }
        if (path) {
            this.props.history.push({ pathname: path, query: e.target.innerHTML });
        }
        if (this.props.father) {
            this.props.father.getAxios(e.target.innerHTML);
        }
    }
    render() {
        return (
            <div onClick={this.changePath.bind(this)} id="sortBox">
                <div className="itemBox">
                    <img
                        alt=""
                        src="https://cs.dinghuale.com/uploads/20200615/202006151134064029.png"
                    />
                    <p>用途</p>
                    <div>{this.sortList(this.state.purpose)}</div>
                </div>
                <div className="itemBox">
                    <img
                        alt=""
                        src="https://cs.dinghuale.com/uploads/20200615/202006151135191508.png"
                    />
                    <p>花材</p>
                    <div>{this.sortList(this.state.huacai)}</div>
                </div>
                <div className="itemBox">
                    <img
                        alt=""
                        src="https://cs.dinghuale.com/uploads/20200615/202006151136103227.png"
                    />
                    <p>类别</p>
                    <div>{this.sortList(this.state.kinds)}</div>
                </div>
                <div className="itemBox">
                    <img
                        alt=""
                        src="https://cs.dinghuale.com/uploads/20200615/202006151136201615.png"
                    />
                    <p>枝数</p>
                    <div>{this.sortList(this.state.num)}</div>
                </div>
            </div>
        );
    }
}

export default Main;
