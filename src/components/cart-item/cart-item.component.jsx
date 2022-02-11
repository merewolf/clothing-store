import React from 'react';
import {
  CartItemContainer,
  CartItemImage,
  CartItemDetailsContainer,
  Name,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <CartItemDetailsContainer>
      <Name>{name}</Name>
      <span>
        {quantity} x ${price}
      </span>
    </CartItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
