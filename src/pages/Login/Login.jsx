import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {

  const [signState, setSignState] = useState("Sign In")


  return (
    <div className='login'>
      <img className='login-logo' src={logo} alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up"?  <input type='text' placeholder='Your name' /> :<></>}
          <input type='email' placeholder='Emial' />
          <input type='password' placeholder='password' />
          {signState == "Sign up"? <button>Sign Up</button>: <button>Sign In</button>}
          <div className="form-help">
            <div className="remember">
              <input type='checkbox'/>
              <label htmlFor=''>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState !== "Sign In"? <p>Already have an account? <span onClick={()=> {setSignState("Sign In")}}>Sign In Now</span></p>
          :<p>new to Netflix? <span onClick={()=> {setSignState("Sign Up")}}>Sign Up Now</span></p>}
          
        </div>
      </div>
    </div>
  )
}

export default Login
