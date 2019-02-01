import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";

// rounter are shared for both server and client
export default () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
    </div>
  );
};
