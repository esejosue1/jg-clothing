//adding the items into the shopping bag

import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import CustomButton from '../custom-botton/custom-botton.components';
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHideen} from '../../redux/cart/cart.actions';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history, dispatch}) =>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length?
            cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))
            :
            <span className='empty-message'>Your cart is empty</span>
            }
         </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            // hide the cart once the user moves to the checkout page
            dispatch(toggleCartHideen())
         } }>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems
})

export default withRouter(connect(mapStateToProps) (CartDropdown));