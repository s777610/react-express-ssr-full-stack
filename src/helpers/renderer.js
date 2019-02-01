import React from "react";
import { renderToString } from "react-dom/server";
import Home from "../client/components/Home";

export default () => {
  // we are using JSX in express server ... wtf???
  // content is HTML
  const content = renderToString(<Home />);

  return `
  <html>
    <head>hi</head>
    <body>
      <div id="root">${content}</div>
      <script src="bundle.js"></script>
    </body>
  </html>
  `;
};
