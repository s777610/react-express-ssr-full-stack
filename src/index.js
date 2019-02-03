import "babel-polyfill";
import express from "express";
import { matchRoutes } from "react-router-config";
import proxy from "express-http-proxy";
import Routes from "./client/Routes";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

const app = express();

// proxy will not be used when initial request
// any request/action creator from browser, try to access "/api",
// will be send to "http://react-ssr-api.herokuapp.com"
app.use(
  "/api",
  proxy("http://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator(opts) {
      opts.header["x-forwarded-host"] = "localhost:3000";
      return opts;
    }
  })
);

app.use(express.static("public")); // allow browser to find public/bundle
app.get("*", (req, res) => {
  const store = createStore();

  // matchRoutes(Routes, req.path) is an array of route
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    res.send(renderer(req, store)); // store chock full of data here
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
