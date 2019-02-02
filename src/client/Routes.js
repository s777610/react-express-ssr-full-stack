import React from "react";
import Home from "./components/Home";
import UsersList, { loadData } from "./components/UsersList";

// rounter are shared for both server and client
export default [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    loadData,
    path: "/users",
    component: UsersList
  }
];
