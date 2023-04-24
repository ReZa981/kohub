import DefaultLayout from '../layout/DefaultLayout';
import {useState} from 'react'
import './index.css';
import Account from './account'
import Service from './service'

const option = {
  Account: Symbol("account"),
  Service: Symbol("service"),
}

function Admin() {

  const [adminoption, setOption] = useState(option.Account)

  return (
    <DefaultLayout>
      <div className='manageoption'>
          <a
            className={adminoption === option.Account ? 'present' : ''}
            href="#"
            onClick={() => setOption(option.Account)}
          >
            ACCOUNT MANAGEMENT
          </a>{' '}
          <a
            className={adminoption === option.Service ? 'present' : ''}
            href="#"
            onClick={() => setOption(option.Service)}
          >
            SERVICE MANAGEMENT
          </a>
          {adminoption === option.Account ? (
            <button type='submit' id='newacc'>+</button>
          ):(
            <button type='submit' id='newservice'>+</button>
          )
          }
        </div>
      {adminoption === option.Account ? (
        <Account />
      ):(
        <Service />
      )
      }
    </DefaultLayout>
  );
}

export default Admin;