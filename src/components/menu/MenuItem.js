import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import Icon from "../../components/icon/Icon";
import "./MenuItem.css";

class MenuItem extends PureComponent {
  render() {
    const { projectKey, title, icon, onClick } = this.props;

    return (
      <div className="menu-item">
        <Link to={projectKey} role="menuitem" onClick={onClick}>
          <Icon name={icon || "folder"} position="left" />
          {title || projectKey}
        </Link>
      </div>
    );
  }
}

export default MenuItem;
