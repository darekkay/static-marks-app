import React, { PureComponent } from "react";

import Button from "../../components/button/Button";
import "./Menu.css";

class Menu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  componentDidMount() {
    document.addEventListener("click", this.onDocumentClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.onDocumentClick);
  }

  showMenu = () => {
    this.setState(() => ({ open: true }));
  };

  onDocumentClick = event => {
    let { target } = event;
    if (
      !target.matches("a") &&
      !target.matches(".close-button") &&
      !target.matches(".icon-times")
    ) {
      while (target !== null) {
        if (target.matches(".menu")) return false; // don't close, if the menu or its child was pressed
        target = target.parentElement;
      }
    }

    this.setState({ open: false });
  };

  render() {
    const { children } = this.props;

    return (
      <div className="menu">
        <Button
          onClick={this.showMenu}
          label="Show projects"
          icon="bars"
          aria-haspopup="menu"
          aria-expanded={this.state.open}
        >
          Projects
        </Button>

        {this.state.open && (
          <div className="dropdown" role="menu">
            {children}
            <Button
              className="close-button"
              onClick={this.showMenu}
              label="Close"
              icon="times"
            />
          </div>
        )}
      </div>
    );
  }
}

export default Menu;
