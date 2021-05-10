import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Collection from "./components/collection/Collection";
import "./App.scss";

const App = ({ title, projectKeys, projects, initialFilter }) => {
  const [currentFilter, applyFilter] = useState(initialFilter);

  const renderTitle = (key) => {
    const prefix = key === undefined ? "" : `${key} | `;
    document.title = `${prefix}${title}`;
  };

  // TODO: improve
  // eslint-disable-next-line react/display-name
  const renderCollections = (key) => () => {
    renderTitle(key);
    return (
      <div className="collections" aria-live="polite">
        {projects
          .filter((set) => key === undefined || set.key === key)
          .map((set) =>
            set.collections.map((collection) => (
              <Collection
                key={collection.title}
                title={collection.title}
                source={set.key}
                buckets={collection.buckets}
                currentFilter={currentFilter}
              />
            ))
          )}
      </div>
    );
  };

  return (
    <div className="app">
      <Header
        projectKeys={projectKeys}
        applyFilter={applyFilter}
        currentFilter={currentFilter}
      />
      <main>
        <h1 className="sr-only">{title}</h1>
        <div className="scrollable-y">
          <Switch>
            <Route exact path="/" render={renderCollections()} />
            {projects.map((set) => (
              <Route
                key={set.key}
                exact
                path={`/${set.key}`}
                render={
                  currentFilter
                    ? renderCollections()
                    : renderCollections(set.key)
                }
              />
            ))}
          </Switch>
          <div className="no-results">
            Your filter did not match any bookmarks.
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default App;
