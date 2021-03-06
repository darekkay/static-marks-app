import React from "react";
import { NavLink } from "react-router-dom";

import Icon from "../../components/icon/Icon";
import "./MenuItem.scss";

const MenuItem = ({ projectKey, route, title, icon, tabIndex, onClick }) => (
  <div className="menu-item">
    <NavLink
      to={route}
      exact
      activeClassName="active"
      role="menuitem"
      onClick={onClick}
      tabIndex={tabIndex}
    >
      <Icon name={icon || "folder"} position="left" />
      {title || projectKey}
    </NavLink>
  </div>
);

export default MenuItem;
