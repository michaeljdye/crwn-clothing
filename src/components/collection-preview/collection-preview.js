import React from 'react';
import './collection-preview.sass';
import CollectionItem from '../collection-item/collection-item';

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        // Limit to 4 items
        .filter((item, i) => i < 4)
        .map(({ id, ...item }) => (
          <CollectionItem key={id} {...item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
