import React, { useContext } from 'react';
import { HashRouter, BrowserRouter, Route, Link } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar2 from './components/NavBar/NavBar'
import CreateAccount from './pages/CreateAccount';
import Deposit from './pages/Deposit';
import Withdraw from './pages/Withdraw';
import AllData from './pages/AllData';
import { UserContext } from "./context";
import Home from './pages/Home.js';
import ReactDOM from 'react-dom';
import './index.css';
import './components/NavBar/NavBar.css'

function App() {
  return (
    <HashRouter>
      <NavBar2/>
      <UserContext.Provider value={{users:[{name:'probando',email:'aloha@prueba.cl',password:'secret',balance:100}]}}>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home}  />
          <Route path="/createaccount/" component={CreateAccount} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

export default App;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();