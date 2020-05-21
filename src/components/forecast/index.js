import React, { Fragment, useState, useEffect, useContext } from "react";
import axios from "axios";
import {
  FiCloudDrizzle,
  FiCloudLightning,
  FiCloudRain,
  FiCloudSnow,
  FiCloud,
  FiSun,
  FiWind,
} from "react-icons/fi";

import Navbar from "../../layout/Navbar";

import "./style.css";

const Forecast = ({ match, location }) => {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast/daily?q=${match.params.city}&cnt=8${location.state.units}&appid=33118e8ea0577c9559d27de5e3a90d00`
      )
      .then(async (res) => {
        await setForecast(res.data.list);
      });
  }, [match.params.city]);

  const changeIcon = (icon) => {
    if (icon === "Clear") {
      return <FiSun size={"6rem"} />;
    } else if (icon === "Drizzle") {
      return <FiCloudDrizzle size={"6rem"} />;
    } else if (icon === "	Rain") {
      return <FiCloudRain size={"6rem"} />;
    } else if (icon === "Snow") {
      return <FiCloudSnow size={"6rem"} />;
    } else if (icon === "Thunderstorm") {
      return <FiCloudLightning size={"6rem"} />;
    } else {
      return <FiCloud size={"6rem"} />;
    }
  };

  const getDate = (date) => {
    const d = new Date();
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    const atualDay = d.getDay() + date;

    if (atualDay <= 6) return weekday[atualDay];
    else {
      return weekday[date - d.getDay() - 1];
    }
  };

  return (
    <Fragment>
      <Navbar />
      <div className="grid-3">
        {forecast.map((daily, index) => (
          <div className="card" key={daily.dt}>
            {getDate(index)}
            {changeIcon(daily.weather[0].main)}
            {Math.round(daily.temp.day)}
            {location.state.units === "" ? "K" : "ºC"}
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Forecast;
