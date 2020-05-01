import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import "./polyfills";

import "./styles/index.scss";
import "./print.scss";

import App from "./App";

// import registerServiceWorker from './registerServiceWorker';

import loadConfig from "./utils/config-loader";

// why-did-you-render
if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line global-require
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    exclude: [
      /^Route/ // React Router
    ]
  });
}

const { projects, title, filter } = loadConfig();
const projectKeys = projects.map(project => project.key);

ReactDOM.render(
  <HashRouter>
    <App
      projects={projects}
      projectKeys={projectKeys}
      title={title}
      filter={filter}
    />
  </HashRouter>,
  document.getElementById("root")
);
// registerServiceWorker();
