//all code related to the state of the code, overall reducer
//overall reducer, must needcombineReducer always
import {combineReducers} from 'redux';

import userReducer from './user/user.reducer';

export default combineReducers({
    user: userReducer
});