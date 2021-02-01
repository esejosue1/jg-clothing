import React from 'react';
import {connect } from 'react-redux';
import { toggleCartHideen} from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-styles.scss';

const CartIcon = ({toggleCartHideen, itemCount}) =>(
    <div className='cart-icon' onClick={toggleCartHideen}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHideen: () => dispatch(toggleCartHideen())
});

// increase the quantity in the cart
const mapStateToProps = state =>({
    itemCount: selectCartItemsCount(state)
})


export default connect (
    mapStateToProps,
    mapDispatchToProps
) (CartIcon);