import {takeLatest, call, put, all} from 'redux-saga/effects'; //listes every actions depending on the type it is passed
import ShopActionTypes from './shop.types';
import {firestore, convertCollectionsSnapchotToMap} from '../../firebase/firebase.utils';
import { fetchCollectionsSuccessful, fetchCollectionsFailure } from "./shop.actions";

export function* fetchCollectionsAsync() {

    try{
        const CollectionRef = firestore.collection('collections')//name of the collection in firestore
        const snapshot = yield CollectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapchotToMap, snapshot);
        yield put(fetchCollectionsSuccessful(collectionsMap));
    } catch (error){
        yield put(fetchCollectionsFailure(error.message))
    }
}

//function that pauses when a specific action is passed
//first parameter is the action passed, 2nd param is what to follow if the action is passed
export function* fetchCollectionsStart(){
    yield takeLatest(   //takeLatest gets the last actinos from many
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    )
}

export function* shopSagas(){
    yield all([
        call(fetchCollectionsStart)
    ])
}