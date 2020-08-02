// Bookmarks and config in stored in a global "window.staticmarks" variable
// This makes it possible to add them at runtime, after the project was built
const loadProjects = () => {
  if (window.staticmarks) {
    return window.staticmarks.bookmarks;
  }
  if (process.env.REACT_APP_BOOKMARKS) {
    // Pass the bookmarks as an environmental variable. The bookmarks will be added at build time.
    return JSON.parse(process.env.REACT_APP_BOOKMARKS);
  }

  return [];
};

// Enable linking to a search result, e.g. for browser search engines
const loadQueryParameter = (param) => {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
};

const loadConfig = () => ({
  projects: loadProjects(),
  title: window?.staticmarks?.title || "Static Marks",
  filter: loadQueryParameter("search") || "",
});

export default loadConfig;
