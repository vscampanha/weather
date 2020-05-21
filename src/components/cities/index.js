import React, { useContext } from "react";

import City from "../city/index";

import "./style.css";
import CitiesContext from "../../context/cities/citiesContext";

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
