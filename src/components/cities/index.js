import React, { useEffect, useContext } from 'react';
import CitiesContext from '../../context/cities/citiesContext';

const Cities = () => {
  const citiesContext = useContext(CitiesContext);

  useEffect(() => {}, []);
  console.log(citiesContext);

  return <div>{/* <div>{<h1>{citiesContext.cities}</h1>}</div> */}</div>;
};

export default Cities;
