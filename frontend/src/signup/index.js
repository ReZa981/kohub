import { useState } from 'react'
import { withRouter } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout'
import './index.css'


function Signup() {
  return (
    <DefaultLayout>
      <div className="login">
        <div className="signupbox">
          <label htmlFor="txtUsername">Username</label>
          <input
            type="text"
            id="txtUsername"
          />
          <label htmlFor="txtPassword">Password</label>
          <input
            type="password"
            id="txtPassword"
          />
          <label htmlFor="txtEmail">Email</label>
          <input
            type="email"
            id="txtEmail"
          />
          <label htmlFor="txtPhonenumber">Phone number</label>
          <input
            type="text"
            id="txtPassword"
          />
          <button type="submit" id="btnSignup" className="signupbutton" >Sign up</button>
          <p className='tologin'>Already have an account ? <a href="login" className="linksignup">Log in</a></p>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Signup
