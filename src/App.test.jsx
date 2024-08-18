import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import App from "./App";

describe("App", () => {
  // eslint-disable-next-line jest/expect-expect
  test("renders without crashing", () => {
    const div = document.createElement("div");
    createRoot(div).render(
      <HashRouter>
        <App projects={[]} projectKeys={[]} />
      </HashRouter>,
    );
  });
});
