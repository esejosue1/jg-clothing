//shop page component

import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import  WithSpinner  from "../../components/with-spinner/with-spinner.component";
import {updateCollections} from '../../redux/shop/shop.actions'
import {firestore, convertCollectionsSnapchotToMap} from '../../firebase/firebase.utils';

//components that will run loading if the data havent fetch completely 
const CollectionOverviewWithSpinner= WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner=WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state ={
        loading:true
    };
    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const {updateCollections} =this.props;
        const collectionRef = firestore.collection('collections');//name of the collection in firestore
        //get data, when the code runs,it will send us the snapshot of the collections array
        collectionRef.get().then((snapshot) =>{
            console.log(snapshot)
           const collectionsMap= convertCollectionsSnapchotToMap(snapshot);
           updateCollections(collectionsMap);
           this.setState({loading:false});
        });
    }

    render(){
        const {match} = this.props;
        const {loading} = this.state;
        return (
            <div className='shop-page'>
            <Route exact path={`${match.path}`} render={(props) => 
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
            {/* works as a parameter of where the rpute wants to go */}
            <Route path={`${match.path}/:collectionId`} render={(props) => 
            <CollectionPageWithSpinner isLoading={loading} {...props} /> } />
         </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>({
    updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps) (ShopPage);