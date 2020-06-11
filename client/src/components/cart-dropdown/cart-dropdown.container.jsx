import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartDropdown from "./cart-dropdown.component";

// Selectors
import { selectCartItems } from "../../redux/cart/cart.selectors";

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

const ItemsContainer = compose(
withRouter,
connect(mapStateToProps)
)(CartDropdown);

export default ItemsContainer;