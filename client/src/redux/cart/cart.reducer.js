import CartActionTypes from "./cart.types";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
  error: null,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.UPDATE_CART_SUCCESS:
      return {
        ...state,
        cartItems: action.payload,
        error: null,
      };

    case CartActionTypes.UPDATE_CART_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
        error: null,
      };

    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
        error: null,
      };

    default:
      return state;
  }
};

export default cartReducer;
