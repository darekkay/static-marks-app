import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Collection from "./components/collection/Collection";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: props.filter,
    };

    this.routeCollections = (key) => () => this.renderCollections(key);
  }

  filter = (value) => {
    this.setState({ filter: value });
  };

  renderTitle = (key) => {
    const prefix = key === undefined ? "" : `${key} | `;
    document.title = `${prefix}${this.props.title}`;
  };

  renderCollections = (key) => {
    this.renderTitle(key);
    return (
      <div className="collections" aria-live="polite">
        {this.props.projects
          .filter((set) => key === undefined || set.key === key)
          .map((set) =>
            set.collections.map((collection) => (
              <Collection
                key={collection.title}
                title={collection.title}
                source={set.key}
                buckets={collection.buckets}
                filter={this.state.filter}
              />
            ))
          )}
      </div>
    );
  };

  render() {
    return (
      <div className="app">
        <Header
          projectKeys={this.props.projectKeys}
          onFilter={this.filter}
          currentFilter={this.state.filter}
        />
        <main>
          <h1 className="sr-only">{this.props.title}</h1>
          <div className="scrollable-y">
            <Switch>
              <Route exact path="/" render={this.routeCollections()} />
              {this.props.projects.map((set) => (
                <Route
                  key={set.key}
                  exact
                  path={`/${set.key}`}
                  render={
                    this.state.filter
                      ? this.routeCollections()
                      : this.routeCollections(set.key)
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
  }
}

export default App;
