import React, { useState, useEffect } from "react";
import clsx from "clsx";

import Hamburger from "../../components/hamburger/Hamburger";
import MenuItem from "./MenuItem";
import "./Menu.scss";

const Menu = (props) => {
  const { items } = props;

  const [open, setOpen] = useState(false);

  // eslint-disable-next-line consistent-return
  const onDocumentClick = (event) => {
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

    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", onDocumentClick);

    return () => {
      document.removeEventListener("click", onDocumentClick);
    };
  }, []);

  return (
    <div className="menu">
      <Hamburger
        onClick={() => setOpen(!open)}
        label="Show projects"
        active={open}
      />

      <div
        className={clsx("dropdown", { closed: !open })}
        role="menu"
        aria-hidden={!open}
      >
        {items.map((item) => (
          <MenuItem key={item.route} tabIndex={open ? 0 : -1} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
