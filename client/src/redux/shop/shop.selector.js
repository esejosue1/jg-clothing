//creating selectors
import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    // object.key turns the object to an array
    // map over the the items of each array
    //if collections exists run, if not return an array
    collections => collections ?
    Object.keys(collections)
    .map(key => collections[key])
    : []
);

export const selectCollection = collectionUrlParam =>
createSelector(
    [selectCollections],
    //if collection params donest exist
    (collections => collections ?
    // find collection.id matching the url parameter of our collection id map
    collections[collectionUrlParam]
    : null)
);

//create selector call, want shop object, return shop fetching
export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop =>shop.isFetching
);

//check is the collection is already loaded, turning null into a boolean
export const selectIsCollectionLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections //if our collection is loaded, return true
);