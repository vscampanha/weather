import React, { useState, useContext } from "react";
import {
  FiCloudDrizzle,
  FiCloudLightning,
  FiCloudRain,
  FiCloudSnow,
  FiCloud,
  FiSun,
  FiWind,
} from "react-icons/fi";

import City from "../city/index";

import CitiesContext from "../../context/cities/citiesContext";

import "./style.css";

const Cities = () => {
  const citiesContext = useContext(CitiesContext);
  const { cities } = citiesContext;

  return (
    <div className="grid-3">
      {cities.map((city) => (
        <City key={city.name} className="card" city={city} />
      ))}
    </div>
  );
};

export default Cities;
