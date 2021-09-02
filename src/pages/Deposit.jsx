import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserBalance } from '../context';


const MakeDeposit = (props) => {
  const [deposit, setDeposit]                   = useState(0);
  const [validTransaction, setValidTransaction] = useState(false);
  const [showBtn, setShowBtn]                   = useState(true);
  const [displayError, setDisplayError]         = useState(false);

  const {balance, setBalance} = useContext(UserBalance);
  
  const handleChange = (event) => {
    console.log(event.target.value);
    setDeposit(event.target.value);
    
    if (event.target.value <= 0 || null || '' || undefined) {
      setShowBtn(false);
      setDisplayError(true);
    }

    else {
      setShowBtn(false);
      setDisplayError(false);
    }
    
  }
  

  function finalBalance (){
    let newTotal = Math.abs(balance) + Math.abs(deposit);
    setBalance(newTotal)
  }  

  const handleSubmit = () => {
    finalBalance();
    setValidTransaction(true);
  }

  function newTransaction() {
    setValidTransaction(false)
    setDeposit(0)
  }

  const withdrawLink = <Link to="/withdraw">here</Link>;



  return (
      <div className="card" style={{width:"28rem", height:"auto"}}>
        <h5 className="card-header">Deposit</h5>
        <div className="card-body">
            <h5 className="card-title">Your account balance is USD {balance}</h5>
            <p className="card-text">Remember you can withdraw from your account {withdrawLink}</p>           
            {validTransaction ? 
            <>
            <p className="card-title">Well done! we have received USD {deposit} and they are now part of your balance</p>
            <h5 className="card-title">You can do another deposit if you want</h5>
            <button  className="btn btn-primary" onClick={newTransaction}>Let's do it!</button>
            </>
            :              
            <form>
              <div>
                <label className="form-label">How much would you like to deposit?</label>
                <input 
                type="number" 
                min="0" 
                style={{width: "150px"}}  
                placeholder="Your amount" 
                className="form-control" 
                onChange={handleChange} />
                
              { displayError ? <h5 className="text-danger">Please type a number greater than zero</h5> : null }
              { showBtn ? 
              <button type="button" 
              onClick={handleSubmit} 
              className="btn btn-dark" 
              disabled={true} 
              >Amount needs to be more than zero
              </button> 
              : 
              <button type="button" 
              onClick={handleSubmit} 
              className="btn btn-primary" 
              disabled={false} 
              >Deposit this amount
              </button>}
              </div>
            </form>
            }
        </div>
      </div>
    )
}

export default MakeDeposit;


