import { connect } from "react-redux";

import { signUpStart } from "../../redux/user/user.actions";

import SignUp from "./sign-up.component";

export const mapDispatchToProps = (dispatch) => ({
  startSignOut: (displayName, email, password) =>
    dispatch(signUpStart({ displayName, email, password })),
});

export default connect(null, mapDispatchToProps)(SignUp);
