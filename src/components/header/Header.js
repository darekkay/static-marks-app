import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";

import Menu from "../menu/Menu";
import Filter from "../filter/Filter";

import "./Header.scss";

class Header extends PureComponent {
  render() {
    const { projectKeys, onFilter, currentFilter } = this.props;

    const clearFilterOnProjectChange = () => onFilter("");
    return (
      <header>
        <div className="header-inner">
          <Filter onFilter={onFilter} currentValue={currentFilter} />

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
                  onClick: clearFilterOnProjectChange,
                })),
              ]}
            />
          )}
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
