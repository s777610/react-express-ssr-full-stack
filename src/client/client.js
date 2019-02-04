// Startup point for the client side application

import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import axios from "axios";
import Routes from "./Routes";
import reducers from "./reducers";

const axiosInstance = axios.create({
  baseURL: "/api"
});

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

// when those code is executed on browser side,
// there is already content inside the id root DOM
// which is we already rendered on the server side
// we are not replacing all HTML inside there
// we just telling react to setup all eventHandler and so on ..
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
