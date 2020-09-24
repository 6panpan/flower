import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createHashHistory } from "history";
import Main from "./view/Main";
import KindPage from "./components/KindPage";
import Person from "./components/person/Person.js";
import Login from "./components/Login";
import Personinf from "./components/person/PersonInf";
import ShowRemind from "./components/person/ShowRemind";
import AddRemind from "./components/person/AddRemind";
import Flower from "./view/Flower";
import buycar from "./view/buycar/buycar"

const myHistory = createHashHistory();
function App() {
    return (
        //  路由的配置
        <div style={{ width: "1200px", margin: "auto" }} className="App">
            <Router history={myHistory}>
                <Route exact={true} path="/" component={Main} />
                <Route exact={true} path="/xianhua" component={KindPage} />
                <Route exact={true} path="/flower/:kindName" component={KindPage} />

                <Route exact={true} path="/Person" component={Person} />

                {/* <Route exact={true} path="/:kindName" component={KindPage} /> */}

                <Route exact={true} path="/FlowerDetail/:flowerID" component={Flower} />
                <Route exact={true} path='/buycar' component={buycar}/>

                <Route exact={true} path="/personinf" component={Personinf} />
                <Route exact={true} path="/showRemind" component={ShowRemind} />
                <Route exact={true} path="/addRemind" component={AddRemind} />

                <Route exact={true} path="/login" component={Login} />
            </Router>
        </div>
    );
}

export default App;
