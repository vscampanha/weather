import React, { useState } from "react";
import {
  FiCloudDrizzle,
  FiCloudLightning,
  FiCloudRain,
  FiCloudSnow,
  FiCloud,
  FiSun,
  FiWind,
} from "react-icons/fi";

const City = ({ city: city }) => {
  const [units, setUnits] = useState("ºC");

  const changeUnits = () => {
    if (units === "ºC") {
      setUnits("ºF");
    } else {
      setUnits("ºC");
    }
  };

  const changeIcon = (icon) => {
    if (icon === "clear sky") {
      return <FiSun size={"6rem"} />;
    } else if (icon === "shower rain" || icon === "light rain") {
      return <FiCloudDrizzle size={"6rem"} />;
    } else if (icon === "	rain") {
      return <FiCloudRain size={"6rem"} />;
    } else if (icon === "snow") {
      return <FiCloudSnow size={"6rem"} />;
    } else if (icon === "thunderstorm") {
      return <FiCloudLightning size={"6rem"} />;
    } else {
      return <FiCloud size={"6rem"} />;
    }
  };

  return (
    <div className="card">
      <h2>{city.name}</h2>
      {changeIcon(city.weather[0].description)}
      <h1>
        {units === "ºC"
          ? Math.round(city.main.temp)
          : Math.round(city.main.temp * 1.8 + 32, 1)}
        {units}
      </h1>
      <div>
        <button className="btn">Forecast</button>
        <button className="btn" onClick={changeUnits}>
          Change to {units === "ºC" ? "ºF" : "ºC"}
        </button>
      </div>
    </div>
  );
};

export default City;
