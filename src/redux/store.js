import {createStore, applyMiddleware} from 'redux';
// local storage for cart
import {persistStore} from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk'; //fire functions that return functions
import rootReducer from './root.reducer';

//logs tthe actions deployed, but use the if so see the logs for only devs
// const middlewares=[logger]; to log no matter who sees it
const middlewares=[thunk]

if (process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}

export const store=createStore(rootReducer, applyMiddleware(...middlewares))
// creating persisting versiono of store
export const persistor = persistStore(store);

export default {store, persistor};