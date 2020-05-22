import React, { Fragment, useState, useRef, useEffect } from "react";
import {
  FiCloudDrizzle,
  FiCloudLightning,
  FiCloudRain,
  FiCloudSnow,
  FiCloud,
  FiSun,
} from "react-icons/fi";

import Forecast from "../forecast";

import "./style.css";

const City = ({ city: city }) => {
  const [units, setUnits] = useState("ºC");
  const [hover, setHover] = useState(false);

  const changeUnits = () => {
    if (units === "ºC") {
      setUnits("K");
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

  const flip = (e) => {
    e.target.className === "front" ? setHover(true) : setHover(false);
  };

  return (
    <Fragment>
      <div className="container">
        <div className="card-container">
          <div className="card">
            {!hover && (
              <figure
                className="front"
                onClick={flip}
                style={{
                  background: `${"linear-gradient(120deg, #a1c4fd 30%, #c2e9fb 100%)"}`,
                }}
              >
                <h2>{city.name}</h2>
                {changeIcon(city.weather[0].description)}
                <h1>
                  {units === "ºC"
                    ? Math.round(city.main.temp)
                    : Math.round(city.main.temp + 272.15)}
                  {units}
                </h1>
                <div>
                  <button className="btn" onClick={changeUnits}>
                    Change to {units === "ºC" ? "K" : "ºC"}
                  </button>
                </div>
              </figure>
            )}
            {hover && (
              <figure
                className="back"
                onClick={flip}
                style={{
                  background: `${"linear-gradient(120deg, #a1c4fd 30%, #c2e9fb 100%)"}`,
                }}
              >
                <Forecast
                  props={{ city: city.name.toLowerCase(), units: units }}
                />
              </figure>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default City;
