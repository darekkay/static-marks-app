import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import "./polyfills";

import "./styles/index.scss";

import App from "./App";
import loadConfig from "./utils/config-loader";

import "./print.scss"; // load print stylesheets last

const { projects, title, filter } = loadConfig();
const projectKeys = projects.map((project) => project.key);

ReactDOM.render(
  <HashRouter>
    <App
      projects={projects}
      projectKeys={projectKeys}
      title={title}
      initialFilter={filter}
    />
  </HashRouter>,
  document.querySelector("#root")
);
