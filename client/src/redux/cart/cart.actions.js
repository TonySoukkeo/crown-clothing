import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const updateCartStart = (cartTransaction) => ({
  type: CartActionTypes.UPDATE_CART_START,
  payload: cartTransaction,
});

export const updateCartSuccess = (cartItems) => ({
  type: CartActionTypes.UPDATE_CART_SUCCESS,
  payload: cartItems,
});

export const updateCartFailure = (error) => ({
  type: CartActionTypes.UPDATE_CART_FAILURE,
  payload: error,
});

export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});
