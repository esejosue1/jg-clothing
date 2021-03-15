import {all, call, takeLatest, put} from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';
import {clearCart} from './cart.actions';

//clear cart when signing out
export function* clearCartOnSignOut(){
    yield put(clearCart());
}

//once signout is successful, run clearoutonsignout func saga
export function* onSignOutSuccess(){
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}



//call sagas
export function* cartSagas(){
    yield(all([
        call(onSignOutSuccess)
    ])
    )
}