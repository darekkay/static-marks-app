import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import "./polyfills";

import "./styles/index.scss";
import "./print.scss";

import App from "./App";
import loadConfig from "./utils/config-loader";

// import registerServiceWorker from './registerServiceWorker';

const { projects, title, filter } = loadConfig();
const projectKeys = projects.map((project) => project.key);

ReactDOM.render(
  <HashRouter>
    <App
      projects={projects}
      projectKeys={projectKeys}
      title={title}
      filter={filter}
    />
  </HashRouter>,
  document.querySelector("#root")
);
// registerServiceWorker();
