import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import "./polyfills";

import "./styles/index.scss";

import App from "./App";
import loadConfig from "./utils/config-loader";

import "./print.scss"; // load print stylesheets last

const { projects, title, filter } = loadConfig();
const projectKeys = projects.map((project) => project.key);

const container = document.querySelector("#root");
createRoot(container).render(
  <HashRouter>
    <App
      projects={projects}
      projectKeys={projectKeys}
      title={title}
      initialFilter={filter}
    />
  </HashRouter>,
);
