import DefaultLayout from '../layout/DefaultLayout';
import {useState} from 'react'
import './index.css';


function accountlist () {

  return (<div className="listinfo">
     <p classname="username">username</p>
     <p classname="userrole">userrole</p>
     <p classname="update">update</p>
     <button type='submit' id='edit'>
      <img src={`${process.env.PUBLIC_URL}/modify.png`} alt="manageop" className="manageop" />
      </button>
     <button type='submit' id='delete'>
     <img src={`${process.env.PUBLIC_URL}/delete.png`} alt="manageop" className="manageop" />
     </button>
  </div>);
}

function Account() {
  return (
    <div className='accountmanagement'>
      <div className="tablehead">
        <p classname="username">username</p>
        <p classname="userrole">userrole</p>
        <p classname="update">last update</p>
        <p classname="edit">modify</p>
        <p classname="delete">delete</p>
      </div>
      <div className='allaccount'>
          {accountlist()}
          {accountlist()}
          {accountlist()}
          {accountlist()}
          {accountlist()}
      </div>
    </div>
    
  );
}

export default Account;