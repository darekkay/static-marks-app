import React from "react";

import Link from "../link/Link";
import "./Note.scss";

const Note = ({ title, url }) => (
  <div className="note">
    {url && <Link title={title} url={url} />}
    {!url && title}
  </div>
);

export default Note;
