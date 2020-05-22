import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../src/pages/Home";
import Navbar from "../src/layout/Navbar";

import CitiesState from "./context/cities/CitiesState";

function App() {
  return (
    <CitiesState>
      <Router>
        <Switch>
          <Route path="//" component={Home} />
        </Switch>
      </Router>
    </CitiesState>
  );
}

export default App;
