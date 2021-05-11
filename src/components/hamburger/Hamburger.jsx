import React from "react";
import cn from "classnames";

import "./Hamburger.scss";

const Hamburger = ({ label, active, children, ...rest }) => (
  <button
    className="btn-unstyled"
    type="button"
    aria-label={label}
    aria-haspopup="menu"
    aria-expanded={active}
    {...rest}
  >
    <span className={cn("hamburger", { active })}>
      <span className="line line-1" />
      <span className="line line-2" />
      <span className="line line-3" />
    </span>
    {children && <div className="label">{children}</div>}
  </button>
);

export default Hamburger;
