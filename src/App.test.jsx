import React from "react";
import ReactDOM from "react-dom";
import "./matchMedia"; // Mocking methods which are not implemented in JSDOM
import { HashRouter } from "react-router-dom";

import App from "./App";

describe("App", () => {
  // eslint-disable-next-line jest/expect-expect
  test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <HashRouter>
        <App projects={[]} projectKeys={[]} />
      </HashRouter>,
      div
    );
  });
});
