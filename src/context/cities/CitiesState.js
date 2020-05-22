import React, { useState, useReducer } from "react";
import axios from "axios";
import CitiesContext from "./citiesContext";
import CitiesReducer from "./citiesReducer";
import { SEARCH_CITIES, DELETE_CITIES, SET_CITY } from "../types";

const CitiesState = (props) => {
  const initialState = {
    units: "",
    cities: [],
    city: "",
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
      });
  };

  //Delete City
  const deleteCity = () => {
    setCities([]);

    dispatch({
      type: DELETE_CITIES,
      payload: [],
    });
  };

  //Set City Forecast
  const setCity = (city) => {
    dispatch({
      type: SET_CITY,
      payload: city,
    });
  };

  return (
    <CitiesContext.Provider
      value={{
        cities: state.cities,
        city: state.city,
        // units: state.units,
        searchCity,
        deleteCity,
        setCity,
      }}
    >
      {props.children}
    </CitiesContext.Provider>
  );
};

export default CitiesState;
