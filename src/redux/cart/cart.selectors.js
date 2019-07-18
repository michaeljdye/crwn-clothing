import { createSelector } from 'reselect';

// Input selector
// Selectors that only return a piece of the state
const selectCart = state => state.cart;

// Output selector
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);
