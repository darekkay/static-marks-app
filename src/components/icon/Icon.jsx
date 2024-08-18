import React from "react";
import clsx from "clsx";

import "./Icon.scss";

const Icon = ({ name, position, className }) => {
  return (
    <svg
      className={clsx(
        "icon",
        `icon-${name}`,
        {
          [`icon-${position}`]: position,
        },
        className,
      )}
    >
      <use xlinkHref={`#icon-${name}`} />
    </svg>
  );
};

export default Icon;
