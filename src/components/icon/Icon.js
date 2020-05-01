import React, { PureComponent } from "react";
import cn from "classnames";

import "./Icon.scss";

class Icon extends PureComponent {
  render() {
    const { name, position } = this.props;
    return (
      <div
        className={cn("icon", `icon-${name}`, {
          [`icon-${position}`]: position
        })}
      />
    );
  }
}

export default Icon;
