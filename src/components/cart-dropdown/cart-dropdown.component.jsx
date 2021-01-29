import React from 'react';

import CustomButton from '../custom-botton/custom-botton.components';

import './cart-dropdown.styles.scss';

const CartDropdown = () =>(
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

export default CartDropdown;