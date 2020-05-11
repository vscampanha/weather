import React from "react";

import Home from "../src/pages/Home";

import CitiesState from "./context/cities/CitiesState";

function App() {
  return (
    <CitiesState>
      <Home />
    </CitiesState>
  );
}

export default App;
