import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';
import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
} from  './collection-item.styles.jsx';

const CollectionItem =({item, addItem}) =>{
    const {name, price, imageUrl} = item;




    return (
        <CollectionItemContainer>
          <BackgroundImage className='image' imageUrl={imageUrl} />
          <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>{price}</PriceContainer>
          </CollectionFooterContainer>
          <AddButton onClick={() => addItem(item)} inverted>
            Add to cart
          </AddButton>
        </CollectionItemContainer>
      );
    };

//add the item that got passed into addItem, go into cart.action as a payload and type, in order to be used in the collection ite,
//dispatch, after updating the action
const mapDispatchToProps = dispatch =>({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)( CollectionItem);