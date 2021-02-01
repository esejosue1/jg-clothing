import {createSelector} from 'reselect';

//obtain the state and only return a small segment of it
//dont need to render everything,just what you need
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
    cartItems.reduce(
        (accumulatedQuantity, cartItem) =>
             accumulatedQuantity+ cartItem.quantity, 0
    )
)