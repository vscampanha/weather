import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "../layout/Navbar";
import Search from "../components/search/index";
import Cities from "../components/cities/index";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <Cities />
    </div>
  );
};

export default Home;
