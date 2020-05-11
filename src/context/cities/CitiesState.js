import React, { useReducer } from "react";
import axios from "axios";
import CitiesContext from "./citiesContext";
import CitiesReducer from "./citiesReducer";
import { SEARCH_CITIES } from "../types";

const CitiesState = (props) => {
  const initialState = {
    city: "",
  };

  const [state, dispatch] = useReducer(CitiesReducer, initialState);

  //Search City
  const searchCity = async (text) => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=33118e8ea0577c9559d27de5e3a90d00`
    );

    dispatch({
      type: SEARCH_CITIES,
      payload: res.data,
    });
  };

  return (
    <CitiesContext.Provider
      value={{
        city: state.city,
        searchCity,
      }}
    >
      {props.children}
    </CitiesContext.Provider>
  );
};

export default CitiesState;
