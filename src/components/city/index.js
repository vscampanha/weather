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

// const useHover = () => {
//   const ref = useRef();
//   const [hover, setHover] = useState(false);

//   const enter = () => setHover(true);
//   const leave = () => setHover(false);

//   useEffect(() => {
//     ref.current.addEventListener("mouseenter", enter);
//     ref.current.addEventListener("mouseleave", leave);
//     return () => {
//       ref.current.removeEventListener("mouseenter", enter);
//       ref.current.removeEventListener("mouseleave", leave);
//     };
//   }, [ref]);

//   return [ref, hover];
// };

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

  // const [ref, hover] = useHover();

  return (
    <Fragment>
      <div className="container">
        <div className="card-container">
          <div className="card">
            {!hover && (
              <figure className="front" onClick={flip}>
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
              <figure className="back" onClick={flip}>
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
