import React, { useEffect } from "react";
import cn from "classnames";

import Button from "../button/Button";
import "./Filter.scss";

const Filter = ({ currentValue, applyFilter }) => {
  useEffect(() => {
    const handleKeyUp = (event) => {
      if (event.keyCode === 27) {
        // clear on 'escape'
        applyFilter("");
      }
    };

    const handleKeyDown = (event) => {
      if (event.keyCode === 27) {
        event.preventDefault(); // Firefox Hack
      }
    };

    document.addEventListener("keyup", handleKeyUp);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [applyFilter]);

  const handleFilterButtonClicked = () => {
    if (currentValue) applyFilter("");
  };

  const handleChange = (event) => {
    applyFilter(event.target.value);
  };

  return (
    // using a form to enable adding a custom browser search engine from the filter input
    <form
      className="filter"
      role="search"
      // prevent site reloads
      onSubmit={(event) => event.preventDefault()}
    >
      <div className={cn("filter-button", { empty: !currentValue })}>
        <Button
          className="text-default"
          label="Clear filter"
          disabled={!currentValue}
          onClick={handleFilterButtonClicked}
          icon={(currentValue && "times") || "search"}
        />
      </div>
      <input
        ref={(input) => input && input.focus()}
        name="search"
        className="input bg-default text-default"
        value={currentValue}
        placeholder="Search everywhere..."
        aria-label="Search everywhere"
        onChange={handleChange}
        type="search"
      />
    </form>
  );
};

export default Filter;
