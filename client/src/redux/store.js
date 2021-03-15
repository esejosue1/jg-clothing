import {createStore, applyMiddleware} from 'redux';
// local storage for cart
import {persistStore} from 'redux-persist';
import logger from 'redux-logger';
// import thunk from 'redux-thunk'; //fire functions that return functions
import createSagaMiddleWare from 'redux-saga'; //saga are middleware that only fire when certain functions are runned
import rootReducer from './root.reducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleWare();

//logs tthe actions deployed, but use the if so see the logs for only devs
// const middlewares=[logger]; to log no matter who sees it
const middlewares=[sagaMiddleware]

if (process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}

export const store=createStore(rootReducer, applyMiddleware(...middlewares));

//run the sagas
sagaMiddleware.run(rootSaga);

// creating persisting versiono of store
export const persistor = persistStore(store);

export default {store, persistor};