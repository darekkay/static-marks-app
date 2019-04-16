import React, { PureComponent } from "react";
import cn from "classnames";

import Hamburger from "../../components/hamburger/Hamburger";
import MenuItem from "./MenuItem";
import "./Menu.css";

class Menu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { open: false, firstRender: true };
  }

  componentDidMount() {
    document.addEventListener("click", this.onDocumentClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.onDocumentClick);
  }

  toggleMenuVisible = () => {
    this.setState(prevState => ({ open: !prevState.open, firstRender: false }));
  };

  hideMenu = () => {
    this.setState({ open: false });
  };

  onDocumentClick = event => {
    let { target } = event;
    if (
      !target.matches("a") &&
      !target.matches(".close-button") &&
      !target.matches(".icon-times")
    ) {
      while (target !== null) {
        if (target.matches(".menu")) return false; // don't handle closing, if the menu or its child was pressed

        target = target.parentElement;
      }
    }

    this.hideMenu();
  };

  render() {
    const { items } = this.props;

    return (
      <div className="menu">
        <Hamburger
          onClick={this.toggleMenuVisible}
          label="Show projects"
          active={this.state.open}
        >
          Projects
        </Hamburger>

        <div
          className={cn("dropdown", { closed: !this.state.open })}
          role="menu"
          hidden={this.state.firstRender}
          aria-hidden={!this.state.open}
        >
          {items.map(item => (
            <MenuItem
              key={item.route}
              tabIndex={this.state.open ? 0 : -1}
              {...item}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Menu;
