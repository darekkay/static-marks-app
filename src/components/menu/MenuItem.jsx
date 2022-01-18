import React from "react";
import { NavLink } from "react-router-dom";

import Icon from "../../components/icon/Icon";
import "./MenuItem.scss";

const MenuItem = ({ projectKey, route, title, icon, tabIndex, onClick }) => (
  <div className="menu-item">
    <NavLink
      to={route}
      end
      activeClassName="active"
      role="menuitem"
      onClick={onClick}
      tabIndex={tabIndex}
    >
      <Icon
        name={icon}
        className="item-inactive text-default"
        position="left"
      />
      <Icon
        name={`${icon}-filled`}
        className="item-active text-default"
        position="left"
      />
      {title || projectKey}
    </NavLink>
  </div>
);

export default MenuItem;
