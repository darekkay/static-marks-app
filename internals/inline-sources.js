/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

const inline = require("inline-source");

const htmlpath = path.resolve("build/index.html");
const output = "../cli/src/_template.html";

inline
  .inlineSource(htmlpath, {
    compress: false,
    rootpath: path.resolve("build"),
    attribute: false,
    // Skip all css types and png formats
    ignore: ["json", "svg", "png", "ico"],
  })
  .then((html) => {
    // Do something with html

    fs.writeFile(output, html, (error) => {
      if (error) {
        return console.error(error);
      }

      return console.log(`Template was saved: ${path.resolve(output)}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
