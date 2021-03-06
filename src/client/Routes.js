import React from "react";
import App from "./App";
import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";
import NotFoundPage from "./pages/NotFoundPage";
import AdminsListPage from "./pages/AdminsListPage";

// rounter are shared for both server and client
export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true
      },
      {
        ...AdminsListPage,
        path: "/admins"
      },
      {
        ...UsersListPage,
        path: "/users"
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
