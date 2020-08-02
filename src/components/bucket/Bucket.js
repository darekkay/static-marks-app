import React, { PureComponent } from "react";

import Bookmark from "../bookmark/Bookmark";
import Button from "../button/Button";
import "./Bucket.scss";

class Bucket extends PureComponent {
  openAllLinks = () => {
    this.props.links.forEach((link) => window.open(link.url, "_blank"));
  };

  render() {
    const { title, links } = this.props;

    return (
      <div className="bucket">
        <div className="bucket-header">
          <h3 className="bucket-title">{title}</h3>
          <Button
            onClick={this.openAllLinks}
            label="Open all links from this bucket"
            tabIndex="-1"
            icon="open-all"
          />
        </div>
        <div className="bucket-block">
          {links.map((link) => (
            <Bookmark
              key={`${link.url}${link.title}`}
              title={link.title}
              url={link.url}
              notes={link.notes}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Bucket;
