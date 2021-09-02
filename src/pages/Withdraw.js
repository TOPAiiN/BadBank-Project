import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserBalance } from '../context';


const MakeWithdraw = (event) => {
  const [deposit, setDeposit]                   = useState(0);
  const [validTransaction, setValidTransaction] = useState(false);
  const [showBtn, setShowBtn]                   = useState(true);
  const [displayError, setDisplayError]         = useState(false);
  const [noWithdraw, setNoWithdraw]             = useState(false);

  const {balance, setBalance} = useContext(UserBalance);

  
  const handleChange = (event) => {
    console.log(event.target.value);
    
    if (Math.abs(event.target.value) < 0) {
      setShowBtn(false);
      setDisplayError(true);
    }
    console.log('balance: ', balance)
    if (Number(event.target.value) > balance) {
      setShowBtn(true);
      setDisplayError(true);
      setNoWithdraw(true)
      
    } else {
      setShowBtn(false);
      setDisplayError(false);
      
    }
    setDeposit(Math.abs(event.target.value));
  };
    
  const handleSubmit = (event) => {
    event.preventDefault();
    setDeposit(event.target.value);
    let newTotal = Math.abs(balance) - Math.abs(deposit);
    setBalance(newTotal);
    setValidTransaction(true);
  }

  

 
  function newTransaction() {
    setValidTransaction(false)
    setDeposit(0)
  }

  const depositLink = <Link to="/deposit">here</Link>;



  return (
      <div className="card" style={{width:"28rem", height:"auto"}}>
        <h5 className="card-header">Withdraw</h5>
        <div className="card-body">
            <h5 className="card-title">Your account balance is USD {balance}</h5>
            <p className="card-text">Remember you can deposit money to your account {depositLink}</p>   
            {/* {noWithdraw ? <p className="text-danger"> Please check your balance</p> : null }         */}
            {validTransaction ? 
            <>
            <h5 className="card-title">Check your pockets :) You can withdraw money again if you want</h5>
            <button  className="btn btn-primary" onClick={newTransaction}>Let's do it!</button>
            </>
            :              
            <form>
              <div>
                <label className="form-label">How much would you like to withdraw today?</label>
                <input 
                type="number" 
                min="0" 
                style={{width: "150px"}}  
                placeholder="Your amount" 
                className="form-control" 
                onChange={handleChange} />
              { displayError ? <h5 className="text-danger">You do not have enough funds</h5> : null }
              { showBtn ? 
              <button type="button" 
              onClick={handleSubmit} 
              className="btn btn-dark" 
              disabled={true} 
              >You need to have funds to withdraw
              </button> 
              : 
              <button type="button" 
              onClick={handleSubmit} 
              className="btn btn-primary" 
              disabled={false} 
              >Withdraw this amount
              </button>}
              </div>
            </form>
            }
        </div>
      </div>
    )
}

export default MakeWithdraw;


