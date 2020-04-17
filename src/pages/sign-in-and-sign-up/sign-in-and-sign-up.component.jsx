import React from "react";

import "./sign-in-and-sign-out.styles.scss";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/signup/signup.component";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;