import {createStore, applyMiddleware}from 'redux';
// local storage for cart
import {persistStore} from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './root.reducer';

const middlewares=[logger];

export const store=createStore(rootReducer, applyMiddleware(...middlewares))
// creating persisting versiono of store
export const persistor = persistStore(store);

export default {store, persistor};