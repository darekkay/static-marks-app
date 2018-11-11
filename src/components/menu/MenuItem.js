import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";

import Icon from "../../components/icon/Icon";
import "./MenuItem.css";

class MenuItem extends PureComponent {
  render() {
    const { projectKey, route, title, icon, onClick } = this.props;

    return (
      <div className="menu-item">
        <NavLink
          to={route}
          exact
          activeClassName="active"
          role="menuitem"
          onClick={onClick}
        >
          <Icon name={icon || "folder"} position="left" />
          {title || projectKey}
        </NavLink>
      </div>
    );
  }
}

export default MenuItem;
