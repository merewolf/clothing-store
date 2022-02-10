import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { ToggleCartHidden } from '../../redux/cart/cart-actions';
import {
  CartDropDownContainer,
  CartItemContainer,
  MessageContainer,
  CartDropdownButton,
} from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropDownContainer>
    <CartItemContainer>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <MessageContainer>Your cart is empty</MessageContainer>
      )}
    </CartItemContainer>
    <CartDropdownButton
      onClick={() => {
        history.push('/checkout');
        dispatch(ToggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropDownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
