import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route } from 'react-router-dom';

import { selectCollections } from '../../redux/shop/shop.selectors';
import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection/collection';

const Shop = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(Shop);
