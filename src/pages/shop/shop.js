import React, { Component } from 'react';
import collections from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview';

class Shop extends Component {
  state = { collections };

  render() {
    return (
      <div className="shop-page">
        {collections.map(({ id, ...collection }) => (
          <CollectionPreview key={id} {...collection} />
        ))}
      </div>
    );
  }
}

export default Shop;
