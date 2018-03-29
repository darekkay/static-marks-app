import React, { PureComponent } from "react";
import cl from "classnames";

import Icon from "../icon/Icon";
import "./Button.css";

class Button extends PureComponent {
  render() {
    const { className, label, icon, children, ...rest } = this.props;

    return (
      <button className={cl("btn", className)} aria-label={label} {...rest}>
        <Icon name={icon} />
        {children && <div className="label">{children}</div>}
      </button>
    );
  }
}

export default Button;
