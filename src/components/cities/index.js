import React, { useContext } from "react";
import CitiesContext from "../../context/cities/citiesContext";

const Cities = () => {
  const citiesContext = useContext(CitiesContext);

  return (
    <div>
      <div>
        <h1>{citiesContext.city.name}</h1>
      </div>
    </div>
  );
};

export default Cities;
