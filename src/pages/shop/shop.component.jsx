import React, { useEffect, useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils.js';

import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const CollectionPageRoute = ({ isLoading }) => {
  const { collectionId } = useParams();
  return <CollectionPageWithSpinner isLoading={isLoading} collectionId={collectionId} />;
};

const ShopPage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const collectionRef = firestore.collection('collections');

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(updateCollections(collectionsMap));
      setLoading(false);
    });
  }, [dispatch]);

  return (
    <div className='shop-page'>
      <Routes>
        <Route
          index
          element={<CollectionsOverviewWithSpinner isLoading={loading} />}
        />
        <Route
          path=':collectionId'
          element={<CollectionPageRoute isLoading={loading} />}
        />
      </Routes>
    </div>
  );
};

export default ShopPage;
