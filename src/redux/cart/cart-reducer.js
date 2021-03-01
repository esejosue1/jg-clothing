import CartActionTypes from './cart.types';
import {addItemToCart, removeItemFromCart} from './cart.utils'
const INITIAL_STATE = {
    hidden: true,
    cartItems:[]
}

//fire in every action, update the cart
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
                };
            
            case CartActionTypes.CLEAR_ITEM_FROM_CART:
                    return{
                        ...state,
                        cartItems:state.cartItems.filter(
                            cartItem => cartItem.id !==action.payload.id
                        )
                    };

            case CartActionTypes.REMOVE_ITEM:
                    return{
                        ...state,
                        cartItems: removeItemFromCart(state.cartItems, action.payload)
                    };
            
            //clear items in cart once sign out
            case CartActionTypes.CLEAR_CART:
                return{
                    ...state,
                    cartItems:[]
                };

            default:
                return state;
    }
}

export default cartReducer;