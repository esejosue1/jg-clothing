//define the actions
import CartActionTypes from './cart.types';

export const toggleCartHideen = () =>({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});


// gets the item, generates a new action passing the item as payload
export const addItem = item =>({
    type: CartActionTypes.ADD_ITEM,
    payload:item
});

export const clearItemFromCart = item =>({
    type:CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});

export const removeItem = item =>({
    type:CartActionTypes.REMOVE_ITEM,
    payload:item
})