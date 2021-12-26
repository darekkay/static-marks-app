import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import IconSprite from "./components/icon/IconSprite";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Collection from "./components/collection/Collection";
import "./App.scss";

const renderTitle = (projectKey, title) => {
  const prefix = projectKey === undefined ? "" : `${projectKey} | `;
  document.title = `${prefix}${title}`;
};

const Collections = ({ projects, projectKey, title, currentFilter }) => {
  renderTitle(projectKey, title);
  return (
    <div className="collections" aria-live="polite">
      {projects
        .filter(
          (project) => projectKey === undefined || projectKey === project.key
        )
        .map((project) =>
          project.collections.map((collection) => (
            <Collection
              key={collection.title}
              title={collection.title}
              source={project.key}
              buckets={collection.buckets}
              currentFilter={currentFilter}
            />
          ))
        )}
    </div>
  );
};

const App = (props) => {
  const { title, projectKeys, projects, initialFilter } = props;
  const [currentFilter, applyFilter] = useState(initialFilter);

  return (
    <div className="app">
      <IconSprite />
      <Header
        projectKeys={projectKeys}
        applyFilter={applyFilter}
        currentFilter={currentFilter}
      />
      <main>
        <h1 className="sr-only">{title}</h1>
        <div className="scrollable-y">
          <Routes>
            <Route
              path="/"
              element={<Collections currentFilter={currentFilter} {...props} />}
            />
            {projects.map((project) => (
              <Route
                key={project.key}
                path={`/${project.key}`}
                element={
                  <Collections
                    currentFilter={currentFilter}
                    projectKey={currentFilter ? undefined : project.key}
                    {...props}
                  />
                }
              />
            ))}
          </Routes>
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
