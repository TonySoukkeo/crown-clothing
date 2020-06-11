import { connect } from "react-redux";
import { compose } from "redux";

import {
  selectIsCollectionsLoaded,
  selectCollection,
} from "../../redux/shop/shop.selectors";
import { addItem } from "../../redux/cart/cart.actions";

import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "./collection.component";

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
  isLoading: !selectIsCollectionsLoaded(state),
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
