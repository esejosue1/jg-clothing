import React from 'react';
import {connect } from 'react-redux';
import { toggleCartHideen} from '../../redux/cart/cart.actions';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-styles.scss';

const CartIcon = ({toggleCartHideen}) =>(
    <div className='cart-icon' onClick={toggleCartHideen}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHideen: () => dispatch(toggleCartHideen())
});


export default connect (
    null,
    mapDispatchToProps
) (CartIcon);