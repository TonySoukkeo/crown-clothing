import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Header from "./header.component";
import CartIconContainer from "../cart-icon/cart-icon.container";
import CartDropdownContainer from "../cart-dropdown/cart-dropdown.container";

configure({
  adapter: new Adapter(),
});

describe("Header component", () => {
  let wrapper;
  let mockCurrentUser;
  let mockHidden;
  let mockSignoutStart;

  beforeEach(() => {
    mockCurrentUser = {
      name: "rina",
      email: "rina@gmail.com",
    };

    mockHidden = true;
    mockSignoutStart = jest.fn();

    const mockProps = {
      currentUser: mockCurrentUser,
      hidden: mockHidden,
      signOutStart: mockSignoutStart,
    };

    wrapper = shallow(<Header {...mockProps} />);
  });

  it("renders Header component without crashing", () => {
    expect.assertions(1);
    expect(wrapper).toMatchSnapshot();
  });

  it("displays a logo", () => {
    const logoContainer = wrapper.find("LogoContainer");

    expect.assertions(2);
    expect(logoContainer.exists()).toEqual(true);
    expect(logoContainer.length).toEqual(1);
  });

  it("redirects back to homepage when logo is clicked", () => {
    const logoContainer = wrapper.find("LogoContainer");

    expect.assertions(2);
    expect(logoContainer.prop("to")).not.toBeUndefined();
    expect(logoContainer.prop("to")).toBe("/");
  });

  it("has a signout button if there is a currentUser", () => {
    const optionLink = wrapper.find("OptionsContainer");

    expect.assertions(1);
    expect(optionLink.childAt(2).prop("onClick")).not.toBeUndefined();
  });

  it("calls signOutStart method when signout link is clicked", () => {
    wrapper.find("OptionsContainer").childAt(2).simulate("click");

    expect.assertions(1);
    expect(mockSignoutStart).toHaveBeenCalled();
  });

  it("displays sign in link if there is no current user", () => {
    const mockProps = {
      currentUser: null,
      hidden: mockHidden,
      signOutStart: mockSignoutStart,
    };

    const wrapper2 = shallow(<Header {...mockProps} />);
    const optionsContainer = wrapper2
      .find("OptionsContainer")
      .childAt(2)
      .prop("to");

    expect.assertions(2);
    expect(optionsContainer).not.toBeUndefined();
    expect(optionsContainer).toBe("/signin");
  });

  it("displays a cart icon", () => {
    const cartIcon = wrapper.find(CartIconContainer);

    expect.assertions(1);
    expect(cartIcon.exists()).toEqual(true);
  });

  it("displays the correct amount of links", () => {
    const optionsContainer = wrapper.find("OptionsContainer");

    expect.assertions(1);
    expect(optionsContainer.children().length).toEqual(4);
  });

  it("hides cart dropdown if hidden is true", () => {
    const cartDropdown = wrapper.find(CartDropdownContainer);

    expect.assertions(1);
    expect(cartDropdown.exists()).toEqual(false);
  });

  it("displays cart dropdown if hidden is false", () => {
    const mockProps = {
      currentUser: mockCurrentUser,
      hidden: false,
      signOutStart: mockSignoutStart,
    };

    const wrapper3 = shallow(<Header {...mockProps} />);

    const cartDropdown = wrapper3.find(CartDropdownContainer);

    expect.assertions(1);
    expect(cartDropdown.exists()).toEqual(true);
  });
});
