import { useState } from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import './index.css';

const role = {
	Admin: Symbol("admin"),
	User: Symbol("user"),
}

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState(role.User);

  return (
    <DefaultLayout>
        <div className="login">
          <div className='loginrole'>
            <a
              className={userRole === role.User ? 'current' : ''} href="#" onClick={() => setUserRole(role.User)}
            >
              User
            </a>{' '}
            <a
              className={userRole === role.Admin ? 'current' : ''} href="#" onClick={() => setUserRole(role.Admin)}
            >
              Admin
            </a>
          </div>
          <div class="loginbox">
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
             <button type="submit" id="btnLogin" > Log in</button>
             <p className='tosignup'>Don’t have any account ? <a href="signup" className="linksignup">Sign up</a></p>
          </div>
        </div>
    </DefaultLayout>
  );
}

export default Login;