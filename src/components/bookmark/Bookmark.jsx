import React, { useState } from "react";
import cn from "classnames";

import Note from "../note/Note";
import Link from "../link/Link";
import Icon from "../icon/Icon";
import Button from "../button/Button";
import "./Bookmark.scss";

const Bookmark = ({ title, url, notes }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <div className="bookmark">
      <div className="bookmark-row">
        {!!url && (
          <Link title={title} url={url}>
            <Icon name="bookmark" className="text-default" position="left" />
            <Icon
              name="bookmark-filled"
              className="text-default"
              position="left"
            />
            {title}
          </Link>
        )}
        {!url && <div>{title}</div>}

        {notes && (
          <Button
            className={cn("button-expand", { expanded })}
            onClick={toggleExpanded}
            icon="angle-down"
            label={expanded ? "Close notes" : "Open notes"}
            aria-expanded={expanded}
          />
        )}
      </div>

      {notes && expanded && (
        <div className="notes">
          {notes.map((note, index) =>
            typeof note === "string" ? (
              <Note key={index} title={note} />
            ) : (
              <Note key={index} title={note.title} url={note.url} />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Bookmark;
