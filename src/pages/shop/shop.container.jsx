import { connect } from 'react-redux';

import { fetchCollectionStart } from '../../redux/shop/shop.actions';

import Shop from "./shop.component";

const mapDispatchToProps = dispatch => ({
    fetchCollectionStart: () => dispatch(fetchCollectionStart())
  });

  export default connect(null, mapDispatchToProps)(Shop);