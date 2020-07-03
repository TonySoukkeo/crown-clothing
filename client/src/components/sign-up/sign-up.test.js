import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CustomButton from "../custom-button/custom-button.component";

import SignUp from "./sign-up.component";
import FormInput from "../form-input/form-input.component";

configure({
  adapter: new Adapter(),
});

describe("Signup component", () => {
  let wrapper;
  let mockStartSignOut;

  beforeEach(() => {
    mockStartSignOut = jest.fn();

    wrapper = shallow(<SignUp startSignOut={mockStartSignOut} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("renders signup component without crashing", () => {
    expect.assertions(1);
    expect(wrapper).toMatchSnapshot();
  });

  describe("Tests out value changes on form inputs", () => {
    let displayInput,
      emailInput,
      passwordInput,
      confirmPasswordInput,
      submitButton;

    beforeEach(() => {
      displayInput = wrapper.find("form").childAt(0);
      emailInput = wrapper.find("form").childAt(1);
      passwordInput = wrapper.find("form").childAt(2);
      confirmPasswordInput = wrapper.find("form").childAt(3);
      submitButton = wrapper.find(CustomButton);
    });

    it("form contains input fields for displayName, email, password, confirmPassword, and a submit button, in that order.", () => {
      const form = wrapper.find("form");

      const numberOfInputs = wrapper
        .find(FormInput)
        .reduce((acc, curr) => acc + 1, 0);

      expect.assertions(7);

      expect(numberOfInputs).toEqual(4);
      expect(displayInput.prop("name")).toBe("displayName");
      expect(emailInput.prop("name")).toBe("email");
      expect(passwordInput.prop("name")).toBe("password");
      expect(confirmPasswordInput.prop("name")).toBe("confirmPassword");
      expect(submitButton.exists()).toEqual(true);
      expect(submitButton.prop("type")).toBe("submit");
    });

    it("test onChange value on displayName input", () => {
      const displayValue = "testing";

      expect(displayInput.props().value).toBe("");

      displayInput.props().onChange({
        target: {
          value: displayValue,
          name: displayInput.prop("name"),
        },
      });

      displayInput = wrapper.find("form").childAt(0);

      expect(displayInput.props().name).toBe("displayName");
      expect(displayInput.props().value).toBe(displayValue);
    });

    it("test onChange value on email input", () => {
      const emailValue = "test@test.com";

      expect(emailInput.props().value).toBe("");

      emailInput.props().onChange({
        target: {
          value: emailValue,
          name: emailInput.prop("name"),
        },
      });

      emailInput = wrapper.find("form").childAt(1);

      expect(emailInput.props().name).toBe("email");
      expect(emailInput.props().value).toBe(emailValue);
    });

    it("test onChange value on password input", () => {
      const passwordValue = "password123";

      expect(passwordInput.props().value).toBe("");

      passwordInput.props().onChange({
        target: {
          value: passwordValue,
          name: passwordInput.prop("name"),
        },
      });

      passwordInput = wrapper.find("form").childAt(2);

      expect(passwordInput.props().name).toBe("password");
      expect(passwordInput.props().value).toBe(passwordValue);
    });

    it("test onChange value on confirm password input", () => {
      const confirmPasswordValue = "password123";

      expect(confirmPasswordInput.props().value).toBe("");

      confirmPasswordInput.props().onChange({
        target: {
          value: confirmPasswordValue,
          name: confirmPasswordInput.prop("name"),
        },
      });

      confirmPasswordInput = wrapper.find("form").childAt(3);

      expect(confirmPasswordInput.props().name).toBe("confirmPassword");
      expect(confirmPasswordInput.props().value).toBe(confirmPasswordValue);
    });
  });

  it("has onsubmit prop on form", () => {
    const form = wrapper.find("form");

    expect.assertions(1);
    expect(form.prop("onSubmit").length).toEqual(1);
  });
});
