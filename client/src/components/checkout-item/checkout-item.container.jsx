import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selectors";

import {
  clearItemFromCart,
  updateCartStart,
} from "../../redux/cart/cart.actions";

import CheckoutItem from "./checkout-item.component";

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  updateCart: (currentUser, transaction) =>
    dispatch(updateCartStart({ currentUser, ...transaction })),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);
