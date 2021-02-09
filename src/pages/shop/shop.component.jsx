//shop page component

import React from 'react';
import {Route} from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({match}) =>(
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        {/* works as a parameter of where the rpute wants to go */}
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
     </div>
)



export default ShopPage;