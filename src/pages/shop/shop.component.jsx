//shop page component

import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import { fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';


class ShopPage extends React.Component {
    componentDidMount(){
        //function that includes is loading with the fetching of all shop components
        const { fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync();
    }

    render(){
        const {match} = this.props;
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
}


const mapDispatchToProps = dispatch =>({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect
(null, 
mapDispatchToProps) 
(ShopPage);