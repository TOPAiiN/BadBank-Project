import { useContext, useState } from "react";
import { UserContext } from "../context";

function CreateAccount(){
    const [show, setShow]                       = useState(true);
    const [name, setName]                       = useState('');
    const [nameError, setNameError]             = useState(false)
    const [email, setEmail]                     = useState('');
    const [emailError, setEmailError]           = useState(false)
    const [password, setPassword]               = useState('');
    const [passwordError, setPasswordError]     = useState(false);
    const [submitBtn, setsubmitBtn]             = useState(false);
    const [isValid, setisValid]                 = useState(false);
    const ctx = useContext(UserContext);  
    
  
    function handleCreate(event){
      console.log(name,email,password);
      if (!event.target.value.trim() && isValid){
      ctx.users.push({name,email,password,balance:0});
      setShow(false);
    } else {
      return
    }
    }    
    

    function handleChange (event){
      let validatingFields = false;
      const input = event.target;
      // console.log(event.target.value)
      // console.log(event.target.id)
      // console.log('test 2 :', input.value.length)
      
          if (input.id === 'name'){
            setName(input.value);
            if (!input.value.length === '' && email === '' && password === ''){
              // console.log('name: ', event.target.value)
              validatingFields = false;
            } else { 
              validatingFields = true;
              setisValid(true);
            }
            if(input.value.length < 1){
              setNameError(true)          
            } else {
            setNameError(false);
            setisValid(true);
          }
        }
        if (input.id === 'email'){
          setEmail(input.value);
          if (input.value === '' && email === '' && password === ''){
            // console.log('email: ', event.target.value)
            validatingFields = true;
          if (!/\S+@\S+\.\S+/.test(email)){
            setEmailError(true);
          }
          }else{
            validatingFields = false;
            setisValid(true);
          }
          if(input.value.length < 1){
            setEmailError(true)          
          } else {
          setEmailError(false);
          setisValid(true);
          }
        }

        if (input.id === 'password'){
          setPassword(input.value);
          if (!input.value === '' && email === '' && password === '' && input.value.length > 8){
            console.log('password: ', event.target.value)
            validatingFields = true;
          }else{
            validatingFields = false;
            setisValid(true);
          }
          if(input.value === '' || input.value.length < 8 ){
            setPasswordError(true)          
          } else {
          setPasswordError(false);
          setisValid(true);
          }
        }
      if (validatingFields){
        setsubmitBtn(true);
      }
    
    }

    function clearForm(){
      setName('');
      setEmail('');
      setPassword('');
      setShow(true);
      setisValid(false)
    }

    // const text = {
    //   errors: {
    //     nameError: <p className="text-danger">Please enter your full name</p>,
    //     emailMessage: <p className="text-danger">Please enter a valid email</p>,
    //     passwordMessage: <p className="text-danger">Please enter a password with more than 8 letters</p>,
    //   },

    //   messages: {

    //   }
    // }
    
    // const { errorMessage, emailMessage, passwordMessage } = text;

    return (
      <div class="card" style={{width:"36rem"}}>
  <div class="card-header text-white bg-primary">
    <h2>Create a new account with us!</h2>
  </div>
  <div class="card-body bg-dark">
    {show ? (  
                <>
                <p className="text-white">Full Name</p>
                <input 
                  type="text" 
                  className="form-control" 
                  data-testid="name" 
                  id="name" 
                  placeholder="Enter your name" 
                  onChange={handleChange} />
                {nameError && <p className="text-danger"><b>Please enter your full name</b></p>}<br/>
                <p className="text-white">Email address</p>                
                  <input 
                  type="email" 
                  className="form-control" 
                  data-testid="email"  
                  id="email" 
                  placeholder="Enter email"
                  onChange={handleChange}/><br/>
                  {emailError && <p className="text-danger"><b>Please enter a valid email</b></p>}
                  <p className="text-white">Password</p>
                  <input 
                  type="password" 
                  className="form-control" 
                  data-testid="pass"  
                  id="password" 
                  placeholder="Enter password" 
                  onChange={handleChange}/><br/>
                  
                {passwordError && <p className="text-danger"><b>Please enter a password with more than 8 letters</b></p>}<br></br>
                {submitBtn ? 
                <button 
                  type="submit" 
                  className="btn btn-light"
                  onClick={handleCreate}>Create New Account Now</button> 
                  :
                  <button 
                  type="submit" 
                  className="btn btn-light"
                  disable={true}
                  onClick={handleCreate}>Create New Account Now</button> 
                  }
                  
                </>
              ):(
                <>
                <h5 className="text-white">Success</h5>
                <h5 className="text-white">You have created a new account.</h5>
                <button 
                  type="submit" 
                  className="btn btn-light" 
                  onClick={clearForm}>Add another account</button>
                </>
              )}
        </div>
      </div>
    )
}

export default CreateAccount;