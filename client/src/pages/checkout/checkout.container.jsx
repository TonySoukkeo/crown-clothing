import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
    selectCartItems,
    selectCartTotal
  } from '../../redux/cart/cart.selectors';

import Checkout from "./checkout.component";

  const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
  });

  export default connect(mapStateToProps)(Checkout);