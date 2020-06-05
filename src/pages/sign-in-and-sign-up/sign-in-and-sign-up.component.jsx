import React from "react";

import { SignInAndSignUpContainer } from "./sign-in-and-sign-up.styles.jsx";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/signup/signup.component";

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
