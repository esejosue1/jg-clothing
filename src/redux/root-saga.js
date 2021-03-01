//run all sagas at once
import {all, call} from 'redux-saga/effects';
import {shopSagas} from './shop/shop.saga';
import { userSagas } from './user/user.saga';
import {cartSagas} from './cart/cart.sagas';

//Main saga that call each individual saga from the redux folder
export default function* rootSaga(){
    yield all([
        call(shopSagas),
        call(userSagas),
        call(cartSagas)
    ]);

}