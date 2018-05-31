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

const loadConfig = () => ({
  projects: loadProjects(),
  title: window.staticmarks ? window.staticmarks.title : "Static Marks"
});

export default loadConfig;
