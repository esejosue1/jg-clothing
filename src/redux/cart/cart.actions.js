//define the actions
import CartActionTypes from './cart.types';

export const toggleCartHideen = () =>({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});


// gets the item, generates a new action passing the item as payload
export const addItem = item =>({
    type: CartActionTypes.ADD_ITEM,
    payload:item
})