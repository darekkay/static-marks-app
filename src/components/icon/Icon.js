import React, { PureComponent } from "react";
import cl from "classnames";

import "./Icon.css";

class Icon extends PureComponent {
  render() {
    const { name, position } = this.props;
    return (
      <div
        className={cl("icon", `icon-${name}`, {
          [`icon-${position}`]: position
        })}
      />
    );
  }
}

export default Icon;
