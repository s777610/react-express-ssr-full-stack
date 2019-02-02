import "babel-polyfill";
import express from "express";
import { matchRoutes } from "react-router-config";
import Routes from "./client/Routes";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

const app = express();

app.use(express.static("public")); // allow browser to find public/bundle
app.get("*", (req, res) => {
  const store = createStore();

  // matchRoutes(Routes, req.path) is an array of route
  matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData() : null;
  });

  res.send(renderer(req, store));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
