import CartActionTypes from './cart.types';
import {addItemToCart} from './cart.utils'
const INITIAL_STATE = {
    hidden: true,
    cartItems:[]
}


const cartReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        // hide the cart from the menu
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
            // when adding to the cart, add previous items in the array and add the new ones too
            case CartActionTypes.ADD_ITEM:
                return {
                    ...state,
                    cartItems:addItemToCart(state.cartItems, action.payload)
                }
            default:
                return state;
    }
}

export default cartReducer;