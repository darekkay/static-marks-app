import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import "./index.css";
import "./polyfills";
import App from "./App";
import "./print.css";
// import registerServiceWorker from './registerServiceWorker';

import loadBookmarks from "./utils/bookmarks-loader";

// why-did-you-update
if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line global-require
  const { whyDidYouUpdate } = require("why-did-you-update");
  whyDidYouUpdate(React, {
    exclude: [
      /^Route/ // React Router
    ]
  });
}

const projects = loadBookmarks();
const projectKeys = projects.map(project => project.key);

ReactDOM.render(
  <HashRouter>
    <App projects={projects} projectKeys={projectKeys} />
  </HashRouter>,
  document.getElementById("root")
);
// registerServiceWorker();
