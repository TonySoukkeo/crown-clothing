import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import FormInput from "./form-input.component";

configure({
  adapter: new Adapter(),
});

describe("FormInput component", () => {
  let wrapper;
  let mockHandleChange;
  let mockLabel;

  beforeEach(() => {
    mockHandleChange = jest.fn();
    mockLabel = "Email";

    const mockProps = {
      value: "email",
    };

    wrapper = shallow(
      <FormInput
        handleChange={mockHandleChange}
        label={mockLabel}
        {...mockProps}
      />
    );
  });

  it("renders FormInput without crashing", () => {
    expect.assertions(1);
    expect(wrapper).toMatchSnapshot();
  });

  it("displays FormInputLabel if label is provided", () => {
    const formInputLabel = wrapper.find("FormInputLabel");

    expect.assertions(1);
    expect(formInputLabel.exists()).toEqual(true);
  });

  it("does not render out FormInputContainer if label is not provided", () => {
    const mockProps = {
      value: "Email",
    };

    const wrapper2 = shallow(
      <FormInput handleChange={mockHandleChange} {...mockProps} />
    );

    expect.assertions(2);
    expect(wrapper2.find("FormInputLabel").exists()).toEqual(false);
    expect(wrapper2.find("GroupContainer").length).toEqual(1);
  });

  it("displays FormInputContainer", () => {
    expect.assertions(1);
    expect(wrapper.find("FormInputContainer").exists()).toEqual(true);
  });

  it("should call handlechange method when input changes", () => {
    const formInputContainer = wrapper
      .find("FormInputContainer")
      .simulate("change");

    expect.assertions(1);
    expect(mockHandleChange).toHaveBeenCalled();
  });
});
