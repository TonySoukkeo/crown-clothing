import React from "react";
import { shallow, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import SignIn from "./sign-in.component";
import FormInput from "../form-input/form-input.component";

configure({
  adapter: new Adapter(),
});

describe("SignIn component", () => {
  let wrapper;
  let mockEmailSignInStart;
  let mockGoogleSignInStart;

  beforeEach(() => {
    mockEmailSignInStart, (mockGoogleSignInStart = jest.fn());
    const mockProps = {
      emailSignInStart: mockEmailSignInStart,
      googleSignInStart: mockGoogleSignInStart,
    };

    wrapper = shallow(<SignIn {...mockProps} />);
  });

  it("renders SignIn component without crashing", () => {
    expect.assertions(1);
    expect(wrapper).toMatchSnapshot();
  });

  it("has a form", () => {
    const form = wrapper.find("form");

    expect.assertions(1);
    expect(form.exists()).toEqual(true);
  });

  it("contains both email and password input fields in form", () => {
    const form = wrapper.find("form");
    const emailInput = form.childAt(0).prop("type");
    const passwordInput = form.childAt(1).prop("type");

    expect(emailInput).not.toBeUndefined();
    expect(passwordInput).not.toBeUndefined();
  });

  it("calls googleSignInStart when button is clicked", () => {
    wrapper.find("ButtonsBarContainer").childAt(1).simulate("click");

    expect(mockGoogleSignInStart).toHaveBeenCalled();
  });

  it("has an empty intial value for email and password fields", () => {
    const emailInput = wrapper.find("form").childAt(0);
    const passwordInput = wrapper.find("form").childAt(1);

    expect.assertions(2);
    expect(emailInput.prop("value")).toEqual("");
    expect(passwordInput.prop("value")).toEqual("");
  });

  it("updates email input value correctly onChange", () => {
    let emailInput = wrapper.find("form").childAt(0);
    const newEmailValue = "test@test.com";

    expect.assertions(3);
    expect(emailInput.prop("value")).toBe("");

    emailInput.props().handleChange({
      target: {
        name: "email",
        value: newEmailValue,
      },
    });

    emailInput = wrapper.find("form").childAt(0);

    expect(emailInput.prop("value")).toBe(newEmailValue);
    expect(emailInput.prop("name")).toBe("email");
  });

  it("updates password input value correctly onChange", () => {
    let passwordInput = wrapper.find("form").childAt(1);
    const newPasswordValue = "password123";

    expect(passwordInput.prop("value")).toBe("");

    passwordInput.props().handleChange({
      target: {
        name: "password",
        value: newPasswordValue,
      },
    });

    passwordInput = wrapper.find("form").childAt(1);

    expect(passwordInput.prop("value")).toBe(newPasswordValue);
    expect(passwordInput.prop("name")).toBe("password");
  });
});
