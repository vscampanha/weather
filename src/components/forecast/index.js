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

import "./style.css";

const Forecast = ({ props }) => {
  const [forecast, setForecast] = useState([]);

  const { city, units } = props;

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=4&appid=33118e8ea0577c9559d27de5e3a90d00`
      )
      .then(async (res) => {
        await setForecast(res.data.list);
      });
  }, [props]);

  const changeIcon = (icon) => {
    if (icon === "Clear") {
      return <FiSun size={"5rem"} />;
    } else if (icon === "Drizzle") {
      return <FiCloudDrizzle size={"5rem"} />;
    } else if (icon === "	Rain") {
      return <FiCloudRain size={"5rem"} />;
    } else if (icon === "Snow") {
      return <FiCloudSnow size={"5rem"} />;
    } else if (icon === "Thunderstorm") {
      return <FiCloudLightning size={"5rem"} />;
    } else {
      return <FiCloud size={"5rem"} />;
    }
  };

  const getDate = (index) => {
    const d = new Date();
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    const atualDay = d.getDay() + index;

    if (atualDay <= 6) {
      return weekday[atualDay];
    } else {
      return weekday[Math.abs(7 - d.getDay() - index)];
    }
  };

  return (
    <Fragment>
      <div className="grid-7">
        {forecast.map((daily, index) => (
          <div className="card" key={daily.dt}>
            <h3>{getDate(index)}</h3>
            {changeIcon(daily.weather[0].main)}
            <h1>
              {units === "ºC"
                ? Math.round(daily.temp.day)
                : Math.round(daily.temp.day + 272.15)}
              {units}
            </h1>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Forecast;
