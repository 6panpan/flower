import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createHashHistory } from "history";
import Main from "./view/Main";
import KindPage from "./components/KindPage";
import Person from './components/person/Person.js';
import Flower from './view/Flower';
import buycar from './view/buycar/buycar'

const myHistory = createHashHistory();
function App() {
  return ( 
    //  路由的配置  
    <div style={{width:"1200px",margin:"auto"}} className="App">
      <Router history={myHistory}>
        <Route exact={true} path="/" component={Main} />
        <Route exact={true} path="/flower/:kindName" component={KindPage} />
        <Route exact={true} path='/Person' component={Person}/>
        <Route exact={true} path='/FlowerDetail/:flowerID' component={Flower}/>
        <Route exact={true} path='/buycar' component={buycar}/>
      </Router>
    </div>
  );
}

export default App;
