import React, { PureComponent } from "react";
import cn from "classnames";

import Icon from "../icon/Icon";
import "./Button.scss";

class Button extends PureComponent {
  render() {
    const { className, label, icon, children, ...rest } = this.props;

    return (
      <button className={cn("btn", className)} aria-label={label} {...rest}>
        <Icon name={icon} />
        {children && <div className="label">{children}</div>}
      </button>
    );
  }
}

export default Button;
