import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { updateCartStart } from "../../redux/cart/cart.actions";
import CollectionItem from "./collection-item.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  updateCart: (currentUser, transaction) =>
    dispatch(updateCartStart({ currentUser, ...transaction })),
});

const CollectionItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionItem);

export default CollectionItemContainer;
