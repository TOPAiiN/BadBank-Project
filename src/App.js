import React, { useState } from 'react';
import { HashRouter, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar2 from './components/NavBar/NavBar'
import CreateAccount from './pages/CreateAccount';
import Deposit from './pages/Deposit.jsx';
import Withdraw from './pages/Withdraw';
import AllData from './pages/AllData';
import { UserBalance, UserContext } from "./context";
import Home from './pages/Home.js';
import './index.css';
import './components/NavBar/NavBar.css'


function App() {
  const [balance, setBalance] = useState(0);

  return (
    <HashRouter>
        <NavBar2 />
        <UserBalance.Provider value={{balance, setBalance}} >
          <UserContext.Provider  value={{users:[{name:'John Doe',email:'aloha@prueba.cl',password:'secreto',balance:10, id:0}]}}>
            <div className="container" style={{padding: "20px"}}>
              <Route path="/" exact component={Home}  />
              <Route path="/createaccount/" component={CreateAccount} />
              <Route path="/deposit/" component={Deposit} />
              <Route path="/withdraw/" component={Withdraw}  />
              <Route path="/alldata/" component={AllData} />
            </div>
          </UserContext.Provider>      
        </UserBalance.Provider>

    </HashRouter>
  );
}

export default App;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();