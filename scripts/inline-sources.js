/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const inline = require("inline-source");

const htmlpath = path.resolve("build/index.html");
const output = "../cli/src/_template.html";

inline
  .inlineSource(htmlpath, {
    compress: true,
    rootpath: path.resolve("build"),
    attribute: false,
    // Skip all css types and png formats
    ignore: ["json", "svg", "png", "ico"]
  })
  .then(html => {
    // Do something with html

    fs.writeFile(output, html, err => {
      if (err) {
        return console.error(err);
      }

      return console.log(`Template was saved: ${path.resolve(output)}`);
    });
  })
  .catch(err => {
    console.error(err);
  });
