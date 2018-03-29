const getProjects = () => {
  if (window.bookmarks) {
    // Storing bookmarks in a global variable makes it possible to add them at runtime, after the project was built
    return window.bookmarks;
  }
  if (process.env.REACT_APP_BOOKMARKS) {
    // Pass the bookmarks as an environmental variable. The bookmarks will be added at build time.
    return JSON.parse(process.env.REACT_APP_BOOKMARKS);
  }

  return [];
};

export default getProjects;
