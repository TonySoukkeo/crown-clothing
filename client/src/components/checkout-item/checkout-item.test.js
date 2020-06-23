import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import CheckoutItem from "./checkout-item.component";

describe("CartIcon component", () => {
  let wrapper;
  let mockCartItem;
  let mockUpdateCart;
  let mockCurrentUser;

  beforeEach(() => {
    mockCartItem = {
      imageUrl: "www.image1.com",
      name: "Red Jacket",
      price: 32.95,
      quantity: 4,
    };

    mockUpdateCart = jest.fn();
    mockCurrentUser = {
      name: "Jerry",
      id: 2,
      email: "jerry@gmail.com",
    };

    const mockProps = {
      cartItem: mockCartItem,
      updateCart: mockUpdateCart,
      currentUser: mockCurrentUser,
    };

    wrapper = shallow(<CheckoutItem {...mockProps} />);
  });

  it("renders CheckoutItem without crashing", () => {
    expect.assertions(1);
    expect(wrapper).toMatchSnapshot();
  });

  it("has correct src tags for images", () => {
    const imageSrc = wrapper.find("#image").prop("src");

    expect.assertions(1);
    expect(imageSrc).toBe(mockCartItem.imageUrl);
  });

  it("calls update cart correctly when removing an item", () => {
    wrapper.find("#remove-item").simulate("click");

    const removeItemPayload = {
      item: mockCartItem,
      type: "remove",
    };

    expect.assertions(2);

    expect(mockUpdateCart).toHaveBeenCalled();
    expect(mockUpdateCart).toHaveBeenCalledWith(
      mockCurrentUser,
      removeItemPayload
    );
  });

  it("calls update cart correctly when adding an item", () => {
    wrapper.find("#add-item").simulate("click");

    const addItemPayload = {
      item: mockCartItem,
      type: "add",
    };

    expect.assertions(2);

    expect(mockUpdateCart).toHaveBeenCalled();
    expect(mockUpdateCart).toHaveBeenCalledWith(
      mockCurrentUser,
      addItemPayload
    );
  });

  it("renders out item quantity", () => {
    const itemQty = +wrapper.find("#qty").text();

    expect.assertions(1);
    expect(itemQty).toBe(mockCartItem.quantity);
  });

  it("calls udpate cart when removing an item", () => {
    wrapper.find("RemoveButtonContainer").simulate("click");

    const removeItemPayload = {
      item: mockCartItem,
      type: "clear-item",
    };

    expect.assertions(2);
    expect(mockUpdateCart).toHaveBeenCalled();
    expect(mockUpdateCart).toHaveBeenCalledWith(
      mockCurrentUser,
      removeItemPayload
    );
  });
});
