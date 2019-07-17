## Terms

- Project: List of collections, defined in a single file
- Collection: List of buckets
- Bucket: List of bookmarks
- Bookmark: A link with optional notes

## Features

- Easily sharable as a single HTML file
- Print layout, including URLs

## Shortcuts

- Esc: Reset filter
- f: Focus filter input

## Issues

- Chrome doesn't allow opening [multiple links at once](https://stackoverflow.com/questions/16749907/window-open-behaviour-in-chrome-tabs-windows).
 
## Brainstorming

- Private Bookmarks dürfen nicht in die Cloud geraten
- Bookmarks auf GitHub, GoogleDrive, Dropbox etc. halten und pflegen → Über WebHooks automatisch bauen lassen

## Build

1. Update version of `app` and `cli`.
2. Run `yarn build` for `app`.
3. Update Changelog
4. Update version in template
5. npm publish
6. Make GitHub Release
