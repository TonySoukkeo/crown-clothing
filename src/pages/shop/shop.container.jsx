import { connect } from 'react-redux';

import { fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';

import Shop from "./shop.component";

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
  });

  export default connect(null, mapDispatchToProps)(Shop);