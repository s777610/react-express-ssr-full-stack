// Startup point for the client side application

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

// when those code is executed on browser side,
// there is already content inside the id root DOM
// which is we already rendered on the server side
// we are not replacing all HTML inside there
// we just telling react to setup all eventHandler and so on ..
ReactDOM.hydrate(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,

  document.querySelector("#root")
);
