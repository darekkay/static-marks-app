import React, { PureComponent } from "react";

import Bucket from "../bucket/Bucket";
import "./Collection.css";

const wordRegex = /\S+/g;
const emptyArray = [];

class Collection extends PureComponent {
  filteredLinks = (bucket, filter) => {
    if (!filter) return bucket.links;

    const words = (filter.match(wordRegex) || emptyArray).map(word =>
      word.toLowerCase()
    );
    const bucketTitle = bucket.title.toLowerCase();
    return bucket.links.filter(link =>
      // All filter terms need to be included in the bucket, bookmark or note title
      words.every(
        word =>
          link.title.toLowerCase().includes(word) ||
          bucketTitle.includes(word) ||
          (link.notes &&
            link.notes.some(note => note.title.toLowerCase().includes(word)))
      )
    );
  };

  render() {
    const { title, buckets, filter } = this.props;

    const filteredBuckets = buckets.map((bucket, index) => {
      const filteredLinks = this.filteredLinks(bucket, filter);
      return (
        filteredLinks.length > 0 && (
          <Bucket
            key={index}
            title={bucket.title}
            links={filteredLinks}
            filter={filter}
          />
        )
      );
    });

    // hide the collection if the filter doesn't match any entry
    if (filteredBuckets.every(bucket => bucket === false)) return null;

    return (
      <div className="collection">
        <h2 className="collection-title">{title}</h2>
        <div className="buckets">{filteredBuckets}</div>
      </div>
    );
  }
}

export default Collection;
