import React from "react";
import cn from "classnames";

import "./Icon.scss";

const Icon = ({ name, position, className, style }) => {
  return (
    <svg
      className={cn(
        "icon",
        `icon-${name}`,
        {
          [`icon-${position}`]: position,
        },
        className
      )}
      style={style}
    >
      <use xlinkHref={`#icon-${name}`} />
    </svg>
  );
};

export default Icon;
