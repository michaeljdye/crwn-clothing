import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../../components/collection-preview/collection-preview';
import { selectCollections } from '../../redux/shop/shop.selectors';

import './collections-overview.sass';

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...collection }) => (
        <CollectionPreview key={id} {...collection} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
