import React from "react";
import cn from "classnames";

import "./Icon.scss";

const Icon = ({ name, position, className }) => {
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
    >
      <use xlinkHref={`#icon-${name}`} />
    </svg>
  );
};

export default Icon;
