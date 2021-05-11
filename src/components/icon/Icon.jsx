import React from "react";
import cn from "classnames";

import "./Icon.scss";

const Icon = ({ name, position }) => (
  <div
    className={cn("icon", `icon-${name}`, {
      [`icon-${position}`]: position,
    })}
  />
);

export default Icon;
