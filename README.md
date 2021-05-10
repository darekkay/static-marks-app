# Static Marks — App

[![Build](https://img.shields.io/github/workflow/status/darekkay/static-marks-app/Continuous%20Integration/master?style=flat-square)](https://github.com/darekkay/static-marks-app/actions)
[![license](https://img.shields.io/github/license/darekkay/static-marks-app.svg?style=flat-square)](https://github.com/darekkay/static-marks-app/blob/master/LICENSE)

**Note:** This is the frontend part of the [Static Marks](https://github.com/darekkay/static-marks) project. Please view the main repository for more information.

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

## Issues

- Chrome doesn't allow opening [multiple links at once](https://stackoverflow.com/questions/16749907/window-open-behaviour-in-chrome-tabs-windows).

## Build

1. Update version of `app` and `cli`.
2. Run `yarn build` for `app`.
3. Update Changelog
4. Update version in template
5. Make sure no CRLF line endings are used in CLI files.
6. npm publish
7. Make GitHub Release

## License

This project and its contents are open source under the [MIT license](https://github.com/darekkay/static-marks/blob/master/LICENSE).
