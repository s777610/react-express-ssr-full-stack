import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";
import Routes from "../client/Routes";

export default (req, store, context) => {
  // we are using JSX in express server for initial render
  // content is HTML
  const content = renderToString(
    <Provider store={store}>
      {/* StaticRouter take context as props and pass to all components it rendered */}
      {/* This is the context object that we pass to the StaticRouter.
        It can be modified by routes to provide additional information
        for the server-side render */}
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  return `
  <html>
    <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    </head>
    <body>
      <div id="root">${content}</div>
      <script>
        window.INITIAL_STATE = ${serialize(store.getState())}
      </script>
      <script src="bundle.js"></script>
    </body>
  </html>
  `;
};
