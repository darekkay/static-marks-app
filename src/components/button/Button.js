import React from "react";
import cn from "classnames";

import Icon from "../icon/Icon";
import "./Button.scss";

const Button = ({ className, label, icon, children, ...rest }) => (
  <button
    type="button"
    className={cn("btn-unstyled", className)}
    aria-label={label}
    {...rest}
  >
    <Icon name={icon} />
    {children && <div className="label">{children}</div>}
  </button>
);

export default Button;
