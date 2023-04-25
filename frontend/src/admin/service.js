import DefaultLayout from '../layout/DefaultLayout';
import { useState, useEffect } from 'react'
import './index.css';

export const ServiceList = (props) => {
  const { placename, rating } = props
  return (
    <div className="listinfo">
    <p classname="coname">{placename}</p>
    <p classname="ratinglist">{rating}</p>
    <button type='submit' id='edit'>
      <img src={`${process.env.PUBLIC_URL}/modify.png`} alt="manageop" className="manageop" />
    </button>
    <button type='submit' id='delete'>
      <img src={`${process.env.PUBLIC_URL}/delete.png`} alt="manageop" className="manageop" />
    </button>
  </div>);

}

function Service() {
  const [coworks, setcoWork] = useState([]);

  const fetchCoworks = async () => {
    try {
      const response = await fetch("http://localhost:4000/cowork/list");
      const data = await response.json();
      setcoWork(data.list);
    } catch (error) {
      console.error("Error fetching coworks:", error);
    }
  };

  useEffect(() => {
    fetchCoworks();
  }, []);


  return (
    <div className='accountmanagement'>
      <div className="tablehead">
        <p classname="coname">co-working space</p>
        <p classname="ratinglist">rating</p>
        <p classname="edit">modify</p>
        <p classname="delete">delete</p>
      </div>
      <div className='allaccount'>
        {coworks.map((cowork) => (
          <ServiceList placename={cowork.placeName} rating={cowork.rating} />
        ))}
      </div>
    </div>

  );
}

export default Service;