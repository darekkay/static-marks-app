import React, { PureComponent } from "react";

import Link from "../link/Link";
import "./Note.css";

class Note extends PureComponent {
  render() {
    const { title, url } = this.props;

    return (
      <div className="note">
        {url && <Link title={title} url={url} />}
        {!url && title}
      </div>
    );
  }
}

export default Note;
