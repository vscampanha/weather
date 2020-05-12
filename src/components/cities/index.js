import React, { useContext } from 'react';

import CitiesContext from '../../context/cities/citiesContext';

import './style.css';

const Cities = () => {
  const citiesContext = useContext(CitiesContext);

  const { cities } = citiesContext;

  return (
    <div className='grid-3'>
      {cities.map((city) => (
        <div key={city} className='card'>
          <h1>{city.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Cities;
