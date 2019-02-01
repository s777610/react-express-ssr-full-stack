# react-express-ssr-full-stack
This app was mainly built by Node, React, Redux.  It implements server-side rendering.


## Description
We need webpack on both server side and client side because we need to render HTML and react component for the initial request. For the initial request, server will send back HTML file with `<script src="bundle.js"></script>` to the browser. After that, the browser will make a second request to the server in order to get the bundle.js file inside the public folder. The `/public/bundle.js` will hydrate our application on the browser.
