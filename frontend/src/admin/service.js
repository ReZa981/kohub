import DefaultLayout from '../layout/DefaultLayout';
import {useState} from 'react'
import './index.css';

function servicelist () {
  return (<div className="listinfo">
     <p classname="coname">co-working space</p>
     <p classname="ratinglist">rating</p>
     <button type='submit' id='edit'>
      <img src={`${process.env.PUBLIC_URL}/modify.png`} alt="manageop" className="manageop" />
      </button>
     <button type='submit' id='delete'>
     <img src={`${process.env.PUBLIC_URL}/delete.png`} alt="manageop" className="manageop" />
     </button>
  </div>);
}
function Service() {

  return (
    <div className='accountmanagement'>
      <div className="tablehead">
      <p classname="coname">co-working space</p>
     <p classname="ratinglist">rating</p>
        <p classname="edit">modify</p>
        <p classname="delete">delete</p>
      </div>
      <div className='allaccount'>
          {servicelist()}
          {servicelist()}
          {servicelist()}
          {servicelist()}
      </div>
    </div>
    
  );
}

export default Service;