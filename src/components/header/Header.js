import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";

import Menu from "../menu/Menu";
import MenuItem from "../menu/MenuItem";

import Filter from "../filter/Filter";
import "./Header.css";

class Header extends PureComponent {
  render() {
    const { projectKeys, onFilter, currentFilter } = this.props;

    const clearFilterOnProjectChange = () => onFilter("");
    return (
      <header>
        {projectKeys.length > 1 && (
          // Display project selection only for more than 1 projects
          <Menu>
            <MenuItem
              route="/"
              title="all"
              icon="clone"
              onClick={clearFilterOnProjectChange}
            />
            {projectKeys.map(projectKey => (
              <MenuItem
                key={projectKey}
                route={`/${projectKey}`}
                projectKey={projectKey}
                onClick={clearFilterOnProjectChange}
              />
            ))}
          </Menu>
        )}
        <Filter onFilter={onFilter} currentValue={currentFilter} />
        <div className="logo">Static Marks</div>
      </header>
    );
  }
}

export default withRouter(Header);
