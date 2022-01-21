import React from "react";

import Icon from "../icon/Icon";
import Bucket from "../bucket/Bucket";
import "./Collection.scss";

const wordRegex = /\S+/g;
const emptyArray = [];

const filterLinks = (title, bucket, filter) => {
  if (!filter) return bucket.links;

  const words = (filter.match(wordRegex) || emptyArray).map((word) =>
    word.toLowerCase()
  );
  const bucketTitle = bucket.title.toLowerCase();
  return bucket.links.filter((link) =>
    // All filter terms need to be included in the bucket, bookmark or note title/url
    words.every(
      (word) =>
        title.toLowerCase().includes(word) ||
        link.title.toLowerCase().includes(word) ||
        link.url?.toLowerCase().includes(word) ||
        bucketTitle.includes(word) ||
        link.notes?.some((note) => note.title.toLowerCase().includes(word))
    )
  );
};

const Collection = ({ title, buckets, currentFilter, source }) => {
  const filteredBuckets = buckets.map((bucket, index) => {
    const filteredLinks = filterLinks(title, bucket, currentFilter);
    return (
      filteredLinks.length > 0 && (
        <Bucket key={index} title={bucket.title} links={filteredLinks} />
      )
    );
  });

  // hide the collection if the filter doesn't match any entry
  if (filteredBuckets.every((bucket) => bucket === false)) return null;

  return (
    <div className="collection">
      <h2 className="collection-title" title={source}>
        <Icon name="collection" position="left" /> <span>{title}</span>
      </h2>
      <div className="buckets">{filteredBuckets}</div>
    </div>
  );
};

export default Collection;
