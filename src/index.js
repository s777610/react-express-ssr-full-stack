import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import Home from "./client/components/Home";

const app = express();

app.use(express.static("public")); // allow browser to find public/bundle
app.get("/", (req, res) => {
  // we are using JSX in express server ... wtf???
  // content is HTML
  const content = renderToString(<Home />);

  const html = `
  <html>
    <head>hi</head>
    <body>
      <div id="root">${content}</div>
      <script src="bundle.js"></script>
    </body>
  </html>
  `;

  res.send(html);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
