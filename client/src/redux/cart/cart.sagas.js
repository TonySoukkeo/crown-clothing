import { all, takeLatest, put, call } from "redux-saga/effects";

import {
  addItemToCart,
  getCartItems,
  removeItemFromCart,
  clearItemFromCart,
} from "./cart.utils";
import UserActionTypes from "../user/user.types";

import {
  clearCart,
  updateCartSuccess,
  updateCartFailure,
} from "./cart.actions";
import CartActionTypes from "./cart.types";
import { firestore } from "../../firebase/firebase.utils";

function* clearCartOnSignOut() {
  yield put(clearCart());
}

function* updateCart({ payload: { currentUser, item, type } }) {
  try {
    const userId = currentUser.id;

    let updatedCartItems = [];

    if (type !== "clear-cart") {
      // Retrieve user cart items from firestore collection
      const cartItems = yield call(getCartItems, userId);

      switch (type) {
        case "add":
          updatedCartItems = yield call(addItemToCart, cartItems, item);
          break;

        case "remove":
          updatedCartItems = yield call(removeItemFromCart, cartItems, item);
          break;

        case "clear-item":
          updatedCartItems = yield call(clearItemFromCart, cartItems, item);
          break;

        default:
          break;
      }
    }

    // Update users cart on firebase with new updated cart
    yield firestore.collection("Carts").doc(currentUser.id).set({
      cartItems: updatedCartItems,
    });

    // Update cart items on client side
    yield put(updateCartSuccess(updatedCartItems));
  } catch (error) {
    yield put(updateCartFailure(error));
  }
}

function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

function* onUpdateCart() {
  yield takeLatest(CartActionTypes.UPDATE_CART_START, updateCart);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess), call(onUpdateCart)]);
}
