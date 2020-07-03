import CartActionTypes from "./cart.types";
import {
  toggleCartHidden,
  updateCartStart,
  updateCartSuccess,
  updateCartFailure,
  clearItemFromCart,
  clearCart,
} from "./cart.actions";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({
  adapter: new Adapter(),
});

let mockCartItems;
beforeEach(() => {
  mockCartItems = [
    {
      name: "red hoodie",
      qty: 2,
      price: 20,
    },
  ];
});

describe("toggleCartHidden action", () => {
  it("should create the toggleCartHidden action", () => {
    expect.assertions(1);
    expect(toggleCartHidden().type).toEqual(CartActionTypes.TOGGLE_CART_HIDDEN);
  });
});

describe("updateCartStart action", () => {
  it("should create the updateCartStart action", () => {
    const action = updateCartStart(mockCartItems);

    expect.assertions(2);
    expect(action.type).toEqual(CartActionTypes.UPDATE_CART_START);
    expect(action.payload).toEqual(mockCartItems);
  });
});

describe("updateCartSuccess action", () => {
  it("should create the updateCartSuccess action", () => {
    const action = updateCartSuccess(mockCartItems);

    expect.assertions(1);
    expect(action.type).toEqual(CartActionTypes.UPDATE_CART_SUCCESS);
  });
});

describe("updateCartFailure action", () => {
  it("should create updateCartFailure action", () => {
    const mockFailureMessage = "something went wrong";
    const action = updateCartFailure(mockFailureMessage);

    expect.assertions(2);
    expect(action.type).toEqual(CartActionTypes.UPDATE_CART_FAILURE);

    expect(action.payload).toEqual(mockFailureMessage);
  });
});

describe("clearItemFromCart action", () => {
  it("should create clearItemFromCart action", () => {
    const mockItem = {
      id: 1,
      name: "red jacket",
    };
    const action = clearItemFromCart(mockItem);

    expect.assertions(2);
    expect(action.type).toEqual(CartActionTypes.CLEAR_ITEM_FROM_CART);
    expect(action.payload).toEqual(mockItem);
  });
});

describe("clearCart action", () => {
  it("should create clearCart action", () => {
    expect.assertions(1);
    expect(clearCart().type).toEqual(CartActionTypes.CLEAR_CART);
  });
});
