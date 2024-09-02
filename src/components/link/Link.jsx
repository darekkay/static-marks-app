import React from "react";

import "./Link.scss";

const Link = ({ title, url, external = true, children }) => (
  // eslint-disable-next-line react/jsx-no-target-blank
  <a
    className="link"
    href={url}
    title={title}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
  >
    {children || title}
  </a>
);

// The link content does not ever change
export default React.memo(Link, () => true);
