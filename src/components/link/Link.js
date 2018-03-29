import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Link.css";

class Link extends Component {
  static propTypes = {
    title: PropTypes.string,
    url: PropTypes.string.isRequired,
    external: PropTypes.bool
  };

  static defaultProps = {
    external: true
  };

  shouldComponentUpdate = () => false; // The link content does not ever change

  render() {
    const { title, url, external } = this.props;

    return (
      <a
        className="link"
        href={url}
        title={title}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {this.props.children || title}
      </a>
    );
  }
}

export default Link;
