import React, { PureComponent } from "react";
import cl from "classnames";

import "./Hamburger.scss";

class Hamburger extends PureComponent {
  render() {
    const { label, active, children, ...rest } = this.props;

    return (
      <button
        className="btn"
        aria-label={label}
        aria-haspopup="menu"
        aria-expanded={active}
        {...rest}
      >
        <span className={cl("hamburger", { active })}>
          <span className="line line-1" />
          <span className="line line-2" />
          <span className="line line-3" />
        </span>
        {children && <div className="label">{children}</div>}
      </button>
    );
  }
}

export default Hamburger;
