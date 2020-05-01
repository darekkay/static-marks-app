import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";

import Menu from "../menu/Menu";
import Filter from "../filter/Filter";

import "./Header.css";

class Header extends PureComponent {
  render() {
    const { projectKeys, onFilter, currentFilter } = this.props;

    const clearFilterOnProjectChange = () => onFilter("");
    return (
      <header>
        <div className="bar">
          {projectKeys.length > 1 && (
            // Display project selection only for more than 1 projects
            <Menu
              items={[
                {
                  route: "/",
                  title: "all",
                  icon: "clone",
                  onClick: clearFilterOnProjectChange
                },
                ...projectKeys.map(projectKey => ({
                  route: `/${projectKey}`,
                  projectKey,
                  onClick: clearFilterOnProjectChange
                }))
              ]}
            />
          )}
          <Filter onFilter={onFilter} currentValue={currentFilter} />
          <h1 className="logo">Static Marks</h1>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
