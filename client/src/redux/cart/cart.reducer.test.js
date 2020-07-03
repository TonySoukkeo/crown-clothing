import cartReducer from "./cart.reducer";
import { INITIAL_STATE } from "./cart.reducer";
import CartActionTypes from "./cart.types";

describe("cartReducer", () => {
  it("should return initial state", () => {
    expect.assertions(1);
    expect(cartReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it("should toggle hidden with toggleHidden reducer", () => {
    expect.assertions(2);

    expect(
      cartReducer(undefined, { type: CartActionTypes.TOGGLE_CART_HIDDEN })
        .hidden
    ).toEqual(false);

    expect(
      cartReducer(
        { ...INITIAL_STATE, hidden: false },
        { type: CartActionTypes.TOGGLE_CART_HIDDEN }
      ).hidden
    ).toEqual(true);
  });

  it("should correctly update cart when succesfull", () => {
    const previousCartItems = [
      {
        id: 45,
        name: "blue hat",
      },
    ];

    const newCartItems = [
      ...previousCartItems,
      {
        id: 1,
        name: "red jacket",
      },
      {
        id: 2,
        name: "yellow jacket",
      },
    ];

    expect.assertions(1);

    expect(
      cartReducer(
        { ...INITIAL_STATE, cartItems: previousCartItems },
        { type: CartActionTypes.UPDATE_CART_SUCCESS, payload: newCartItems }
      ).cartItems
    ).toEqual(newCartItems);
  });

  it("should update error on update cart failure", () => {
    const failureMessage = "something went wrong";

    expect.assertions(1);

    expect(
      cartReducer(undefined, {
        type: CartActionTypes.UPDATE_CART_FAILURE,
        payload: failureMessage,
      }).error
    ).toEqual(failureMessage);
  });

  it("should clear item from cart if CLEAR_ITEM_FROM_CART is fired", () => {
    const cartItemsMock = [
      {
        id: 3,
      },
      {
        id: 4,
      },
      {
        id: 5,
      },
    ];

    const itemToBeRemoved = {
      id: 5,
    };

    const filteredCartItems = cartItemsMock.filter(
      (item) => item.id !== itemToBeRemoved.id
    );

    expect.assertions(2);
    expect(
      cartReducer(
        { ...INITIAL_STATE, cartItems: cartItemsMock },
        {
          type: CartActionTypes.CLEAR_ITEM_FROM_CART,
          payload: itemToBeRemoved,
        }
      ).cartItems.length
    ).toBe(2);

    expect(
      cartReducer(
        { ...INITIAL_STATE, cartItems: cartItemsMock },
        {
          type: CartActionTypes.CLEAR_ITEM_FROM_CART,
          payload: itemToBeRemoved,
        }
      ).cartItems
    ).toEqual(filteredCartItems);
  });

  it("should clear cart if CLEAR_CART is fired", () => {
    const cartItemsMock = [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ];

    expect.assertions(1);
    expect(
      cartReducer(
        { ...INITIAL_STATE, cartItems: cartItemsMock },
        {
          type: CartActionTypes.CLEAR_CART,
        }
      ).cartItems
    ).toEqual([]);
  });
});
