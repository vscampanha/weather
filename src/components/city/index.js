import React, {
  Fragment,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
import { Link } from "react-router-dom";
import {
  FiCloudDrizzle,
  FiCloudLightning,
  FiCloudRain,
  FiCloudSnow,
  FiCloud,
  FiSun,
  FiWind,
} from "react-icons/fi";

import "./style.css";
import CitiesContext from "../../context/cities/citiesContext";

const useHover = () => {
  const ref = useRef();
  const [hover, setHover] = useState(true);

  const enter = () => setHover(true);
  const leave = () => setHover(false);

  useEffect(() => {
    ref.current.addEventListener("mouseenter", enter);
    ref.current.addEventListener("mouseleave", leave);
    return () => {
      ref.current.removeEventListener("mouseenter", enter);
      ref.current.removeEventListener("mouseleave", leave);
    };
  }, [ref]);

  return [ref, hover];
};

const City = ({ city: city }) => {
  const citiesContext = useContext(CitiesContext);

  const [units, setUnits] = useState("ºC");
  const [hide, setHide] = useState(false);

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

  const [ref, hover] = useHover();

  return (
    <Fragment>
      <div className="card" id={city.name}>
        {hover && (
          <div className="front" ref={ref}>
            <h2>{city.name}</h2>
            {changeIcon(city.weather[0].description)}
            <h1>
              {units === "ºC"
                ? Math.round(city.main.temp)
                : Math.round(city.main.temp + 272.15)}
              {units}
            </h1>
            <div>
              <Link
                to={{
                  pathname: `/city/${(city = city.name.toLowerCase())}`,
                  state: {
                    units: units === "ºC" ? "&units=metric" : "",
                  },
                }}
                className="btn"
              >
                Forecast
              </Link>
              <button className="btn" onClick={changeUnits}>
                Change to {units === "ºC" ? "K" : "ºC"}
              </button>
            </div>
          </div>
        )}
        {hover && (
          <div className="back" ref={ref}>
            <div>ok</div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default City;
