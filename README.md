# react-express-ssr-full-stack
This app was mainly built by Node, React, Redux. Because of SSR, we can reduce the time of initial render and improve SEO. In short, it renders the app on the server side initially.


## Server-Side Rendering
SSR stands for Server-Side Rendering. This app has ability to render both on the server side and client side, called universal App. 
### SSR + SPA = Universal App or Isomorphic App


## Description
We need webpack on both server side and client side because we need to render HTML and react component for the initial request. For the initial request, server will send back HTML template with `<script src="bundle.js"></script>` to the browser. After that, the browser will make a second request to the server in order to get the bundle.js file inside the public folder. The `/public/bundle.js` will hydrate our application on the browser.
