import React, { Component } from "react";

import "./sign-in.styles.scss";

import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({
        email: "",
        password: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an accout</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            type="email"
            name="email"
            label="email"
            value={this.state.email}
            required
          />

          <FormInput
            handleChange={this.handleChange}
            type="password"
            label="password"
            name="password"
            value={this.state.password}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>

            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
