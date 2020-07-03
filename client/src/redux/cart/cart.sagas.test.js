import { put, takeLatest, call } from "redux-saga/effects";
import CartActionTypes from "./cart.types";
import UserActionTypes from "../user/user.types";

import {
  clearCart,
  updateCartSuccess,
  updateCartFailure,
} from "./cart.actions";

import {
  onSignOutSuccess,
  onUpdateCart,
  clearCartOnSignOut,
  updateCart,
} from "./cart.sagas";

import { getCartItems, addItemToCart } from "./cart.utils";

describe("onSignoutSuccess saga", () => {
  it("should trigger on SIGN_OUT_SUCCESS", () => {
    expect.assertions(1);
    expect(onSignOutSuccess().next().value).toEqual(
      takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
    );
  });

  it("should call clearCart on signout", () => {
    expect.assertions(1);
    expect(clearCartOnSignOut().next().value).toEqual(put(clearCart()));
  });
});

describe("onUpdateCart saga", () => {
  it("should trigger UPDATE_CART_START", () => {
    expect.assertions(1);
    expect(onUpdateCart().next().value).toEqual(
      takeLatest(CartActionTypes.UPDATE_CART_START, updateCart)
    );
  });
});

describe("updateCart saga", () => {
  let gen;
  let mockPayload;

  beforeEach(() => {
    mockPayload = {
      payload: {
        currentUser: {
          id: 1,
        },
        item: {
          id: 3,
          name: "purple rain",
        },
        type: "add",
      },
    };

    gen = updateCart(mockPayload);
  });

  // it("should call updateCartFailure if there was an error", () => {
  //   gen.next();

  //   expect(gen.throw({ message: "error" }).value).toEqual(
  //     put(updateCartFailure("error"))
  //   );
  // });

  it("should first get cartItems", () => {
    const {
      payload: { currentUser, item },
    } = mockPayload;

    const userId = currentUser.id;

    expect.assertions(2);
    expect(gen.next().value).toEqual(call(getCartItems, userId));
    expect(gen.next().value).toEqual(call(addItemToCart, [undefined, item]));
  });
});
