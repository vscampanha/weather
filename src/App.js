import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../src/pages/Home";
import Forecast from "../src/components/forecast/";

import CitiesState from "./context/cities/CitiesState";

function App() {
  return (
    <CitiesState>
      <Router>
        <Switch>
          <Route path="//" component={Home} />
          <Route exact path="/city/:city" component={Forecast} />
        </Switch>
      </Router>
    </CitiesState>
  );
}

export default App;
