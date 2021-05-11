// Bookmarks and config in stored in a global "window.staticmarks" variable
// This makes it possible to add them at runtime, after the project was built
const loadProjects = () => {
  if (window.staticmarks) {
    return window.staticmarks.bookmarks;
  }
  if (import.meta.env.VITE_BOOKMARKS) {
    // Pass the bookmarks as an environmental variable. The bookmarks will be added at build time.
    return JSON.parse(import.meta.env.VITE_BOOKMARKS);
  }

  return [];
};

// Enable linking to a search result, e.g. for browser search engines
const loadQueryParameter = (parameter) => {
  const params = new URLSearchParams(window.location.search);
  return params.get(parameter);
};

const loadConfig = () => ({
  projects: loadProjects(),
  title: window?.staticmarks?.title || "Static Marks",
  filter: loadQueryParameter("search") || "",
});

export default loadConfig;
