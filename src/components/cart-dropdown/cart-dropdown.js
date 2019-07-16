import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button';
import './cart-dropdown.sass';

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>Go to Checkout</CustomButton>
  </div>
);

export default CartDropdown;
