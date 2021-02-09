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
    collections => Object.keys(collections)
    .map(key => collections[key])
)

export const selectCollection = collectionUrlParam =>
createSelector(
    [selectCollections],
    collections =>
    // find collection.id matching the url parameter of our collection id map
    collections[collectionUrlParam]
);