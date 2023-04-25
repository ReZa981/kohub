import { useState } from 'react'
import { withRouter } from 'react-router-dom';
import axios from 'axios'
import DefaultLayout from '../layout/DefaultLayout'

import './index.css'

const role = {
  Admin: Symbol("admin"),
  User: Symbol("user"),
}

function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [userRole, setUserRole] = useState(role.User)
  const [error, setError] = useState(null)
    
  const apiLink = `http://localhost:4000/${userRole.User ? 'user' : 'admin'}/login`;


  const handleLogin = async () => {
    console.log('kub')
    console.log(username, password)
    try {
      const response = await axios.post(apiLink, { username, password })
      console.log(response.data)
      if (response.data.token) {
        const token = response.data.token
        localStorage.setItem('token', token);
        console.log('local saved token:', localStorage.getItem('token'))
        window.location.href = '/'
      }

    } catch (err) {
      console.warn(err)
    }
  }

  return (
    <DefaultLayout>
      <div className="login">
        <div className='loginrole'>
          <a
            className={userRole === role.User ? 'current' : ''}
            href="#"
            onClick={() => setUserRole(role.User)}
          >
            User
          </a>{' '}
          <a
            className={userRole === role.Admin ? 'current' : ''}
            href="#"
            onClick={() => setUserRole(role.Admin)}
          >
            Admin
          </a>
        </div>
        <div className="loginbox">
          <label htmlFor="txtUsername">Username</label>
          <input
            type="text"
            id="txtUsername"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="txtPassword">Password</label>
          <input
            type="password"
            id="txtPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <div className="error">{error}</div>}
          <button type="submit" id="btnLogin" className="loginbutton" onClick={handleLogin}>Log in</button>
          <p className='tosignup'>Don’t have any account ? <a href="signup" className="linksignup">Sign up</a></p>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Login
