import React from 'react';
import {connect} from 'react-redux';
import CustomButton from '../custom-botton/custom-botton.components';
import {addItem} from '../../redux/cart/cart.actions';
import './collection-item.styles.scss';

const CollectionItem =({item, addItem}) =>{
    const {name, price, imageUrl} = item;
    return(
    <div className='collection-item'>
        <div 
        className='image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        />
        <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
        
        </div>
        <CustomButton onClick={() => addItem(item)} inverted>
            Add to Cart</CustomButton>
    </div>
    )};

//add the item that got passed into addItem, go into cart.action as a payload and type, in order to be used in the collection ite,
//dispatch, after updating the action
const mapDispatchToProps = dispatch =>({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)( CollectionItem);