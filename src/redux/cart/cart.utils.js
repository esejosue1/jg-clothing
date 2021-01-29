//allow us to keep our files clean andorganize functions 
//that we may need in the multiple files in one location

import cartIconComponent from "../../components/cart-icon/cart-icon.component";

export const addItemToCart = (cartItems, cartItemToAdd)=>{
    // return the founded item that is a repeat
    const existingCartItem = cartItems.find
        (cartItem => cartItem.id === cartItemToAdd.id
        );

    if(existingCartItem){
        // return a new array with updated array
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
            )
    }
    
    return [...cartItems, {...cartItemToAdd, quantity:1}]
}