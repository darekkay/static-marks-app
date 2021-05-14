// TODO: lodash(/fp)?

// TODO: random notes
// {"Bookmark with notes":{"url":"https://example.com","notes":["Text Notes only"]}
// {"Regular Bookmark":"https://example.com"}

const fs = require("fs");

const faker = require("faker");

const config = {
  collections: 2,
  buckets: 3,
  bookmarks: 5,
  notes: {
    frequency: 0.05,
    count: 3,
  },
};

const data = {};

for (let i = 0; i < config.collections; i++) {
  const buckets = [];
  for (let j = 0; j < config.buckets; j++) {
    const bookmarks = [];
    for (let k = 0; k < config.bookmarks; k++) {
      bookmarks.push({
        [faker.random.word()]: faker.internet.url(),
      });
    }
    buckets.push({
      [faker.random.words(3)]: bookmarks,
    });
  }
  data[faker.lorem.word()] = buckets;
}

fs.writeFileSync("./performance-test.json", JSON.stringify(data));
