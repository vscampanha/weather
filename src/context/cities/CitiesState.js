import React, { useState, useReducer } from 'react';
import axios from 'axios';
import CitiesContext from './citiesContext';
import CitiesReducer from './citiesReducer';
import { SEARCH_CITIES } from '../types';

const CitiesState = (props) => {
  const initialState = {
    city: '',
    cities: [],
  };

  const [cities, setCities] = useState([]);

  const [state, dispatch] = useReducer(CitiesReducer, initialState);

  //Search City
  const searchCity = async (text) => {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=33118e8ea0577c9559d27de5e3a90d00`
      )
      .then(async (res) => {
        await setCities(cities.concat(res.data));

        dispatch({
          type: SEARCH_CITIES,
          payload: cities.concat(res.data),
        });
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(() => {});
  };

  return (
    <CitiesContext.Provider
      value={{
        city: state.city,
        cities: state.cities,
        searchCity,
      }}
    >
      {props.children}
    </CitiesContext.Provider>
  );
};

export default CitiesState;
