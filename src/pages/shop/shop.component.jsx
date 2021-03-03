//shop page component

import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import { fetchCollectionsStart} from '../../redux/shop/shop.actions';


const ShopPage =({match,fetchCollectionsStart}) => {
    useEffect (() =>{
        fetchCollectionsStart();
    },[fetchCollectionsStart])

        return (
            <div className='shop-page'>
            <Route 
                exact 
                path={`${match.path}`}
                //pass props into components, doesnt render
                component={CollectionsOverviewContainer}
            />

            {/* works as a parameter of where the rpute wants to go */}
            <Route 
            path={`${match.path}/:collectionId`} 
            //pass props into components, doesnt render
            component={CollectionPageContainer}
            />
         </div>
        )
    }



const mapDispatchToProps = dispatch =>({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect
(null, 
mapDispatchToProps) 
(ShopPage);