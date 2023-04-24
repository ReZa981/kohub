import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

export function ResultComponent () {
  return (
    <div class="resultinfo">
        <p class="resultcoworkname">TrueSpace Salaya</p>
        <p class="resultlocation">Phutthamonthon, Nakhon Pathom</p>
        <p class="resultrating">
            <img src={`${process.env.PUBLIC_URL}/fullduck.png`} alt="star" className="duckrating" />
            <img src={`${process.env.PUBLIC_URL}/fullduck.png`} alt="star" className="duckrating" />
            <img src={`${process.env.PUBLIC_URL}/fullduck.png`} alt="star" className="duckrating" />
            <img src={`${process.env.PUBLIC_URL}/emptyduck.png`} alt="star" className="duckrating" />
            <img src={`${process.env.PUBLIC_URL}/emptyduck.png`} alt="star" className="duckrating" />
        </p>
        <Link to='/coworkingspace'>
            <button type="submit" id="more">More Detail</button>
        </Link>
      </div>
  );
}
