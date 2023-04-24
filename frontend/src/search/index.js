import DefaultLayout from '../layout/DefaultLayout';
import { useState } from 'react';
import './index.css';
import { ResultComponent } from './component';


function Search() {
  const [query, setQuery] = useState('');
  const [criteria, setCriteria] = useState('All');

  return (
    <DefaultLayout>
    <img src={`${process.env.PUBLIC_URL}/wave2.png`} alt="wave2" className="wave2" />
      <div className="search">
        <div className="searchbar">
          <select value={criteria} onChange={(e) => setCriteria(e.target.value)}>
            <option value="all">All</option>
            <option value="name">Name</option>
            <option value="location">Location</option>
            <option value="rating">Rating</option>
          </select>
          <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} />
          <button type="button"> Search </button>
        </div>
        <div className="resulttable">
            {ResultComponent(1)}
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Search;
