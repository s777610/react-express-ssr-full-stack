// Startup point for the client side application

import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";

// when those code is executed on browser side,
// there is already content inside the id root DOM
// which is we already rendered on the server side
// we are not replacing all HTML inside there
// we just telling react to setup all eventHandler and so on ..
ReactDOM.hydrate(<Home />, document.querySelector("#root"));
