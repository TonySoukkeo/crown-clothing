import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from "./cart-icon.component";

// Helper functions
import { toggleCartHidden } from "../../redux/cart/cart.actions";

// Selectors
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);