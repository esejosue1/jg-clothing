
import ShopActionTypes from './shop.types';
import {firestore, convertCollectionsSnapchotToMap} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () =>({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccessful = collectionsMap =>({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCESS,
    payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage =>({
    type:ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

//funct that will pass the compon. async
export const fetchCollectionsStartAsync = () =>{
    return dispatch =>{
        const collectionRef = firestore.collection('collections');//name of the collection in firestore
        dispatch(fetchCollectionsStart()); // run fetchCollection start

        //get data, when the code runs,it will send us the snapshot of the collections array
        collectionRef.get().then((snapshot) =>{
           const collectionsMap= convertCollectionsSnapchotToMap(snapshot);
            dispatch(fetchCollectionsSuccessful(collectionsMap));
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
    }
}
