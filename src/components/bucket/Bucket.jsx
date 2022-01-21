import React from "react";

import Bookmark from "../bookmark/Bookmark";
import Button from "../button/Button";
import "./Bucket.scss";

const Bucket = ({ title, links }) => {
  const openAllLinks = () => {
    links.forEach((link) => window.open(link.url, "_blank"));
  };

  return (
    <div className="bucket">
      <div className="bucket-header">
        <h3 className="bucket-title">{title}</h3>
        <Button
          onClick={openAllLinks}
          label="Open all links from this bucket"
          tabIndex="-1"
          title="Open all links from this bucket"
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
};

export default Bucket;
