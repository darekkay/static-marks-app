import React from "react";

import Button from "../button/Button";
import Menu from "../menu/Menu";
import Filter from "../filter/Filter";

import "./Header.scss";


const Header = ({ projectKeys, applyFilter, currentFilter }) => {
  const clearFilterOnProjectChange = () => applyFilter("");
  const toggleTheme = () => {
    const currentTheme = document.documentElement.dataset.theme;
    if (currentTheme === "default") {
      document.documentElement.dataset.theme = "dark";
    }
    else if (currentTheme === "dark") {
      document.documentElement.dataset.theme = "default";
    }
    localStorage.setItem("theme", document.documentElement.dataset.theme);
  }
  return (
    <header>
      <div className="header-inner">
        <Filter applyFilter={applyFilter} currentValue={currentFilter} />
        <div className="header-actions">
          {projectKeys.length > 1 && (
            // Display project selection only for more than 1 projects
            <Menu
              items={[
                {
                  route: "/",
                  title: "all",
                  icon: "clone",
                  onClick: clearFilterOnProjectChange,
                },
                ...projectKeys.map((projectKey) => ({
                  route: `/${projectKey}`,
                  projectKey,
                  icon: "folder",
                  onClick: clearFilterOnProjectChange,
                })),
              ]}
            />
          )}
          <Button
            className="toggle-theme-btn"
            label="Toggle Light/Dark Mode"
            icon="circle-half"
            onClick={toggleTheme}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
