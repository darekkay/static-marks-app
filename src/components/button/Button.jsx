import React from "react";
import clsx from "clsx";

import Icon from "../icon/Icon";
import "./Button.scss";

const Button = ({ className, label, icon, children, ...rest }) => (
  <button
    type="button"
    className={clsx("btn-unstyled", className)}
    aria-label={label}
    {...rest}
  >
    <Icon name={icon} />
    {children && <div className="label">{children}</div>}
  </button>
);

export default Button;
