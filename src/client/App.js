import React from "react";
import { renderRoutes } from "react-router-config";
import Header from "./components/Header";
import { fetchCurrentUser } from "./actions";

const App = ({ route }) => {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  component: App,
  // call fetchCurrentUser() action creator whenever we load this app
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};
