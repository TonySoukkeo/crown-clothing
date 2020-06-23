import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mockCartItem } from "../../redux/mockStore";

configure({
  adapter: new Adapter(),
});

import CartItem from "./cart-item.component";

describe("CartItem component", () => {
  let wrapper;
  let mockItem;

  beforeEach(() => {
    mockItem = {
      imageUrl: "www.image.com",
      price: 35,
      name: "blue hat",
      quantity: 3,
    };

    const mockProps = {
      item: mockItem,
    };

    wrapper = shallow(<CartItem {...mockProps} />);
  });

  it("renders CartItem without crashing", () => {
    expect.assertions(1);
    expect(wrapper).toMatchSnapshot();
  });

  it("has imageUrl as a src attribute", () => {
    const cartItemImageSrc = wrapper.find("CartItemImage").prop("src");

    expect.assertions(1);
    expect(cartItemImageSrc).toEqual(mockItem.imageUrl);
  });

  it("renders out item name", () => {
    const itemName = wrapper.find("#name").text();

    expect.assertions(1);
    expect(itemName).toEqual(mockItem.name);
  });

  it("renders out item price correctly", () => {
    const itemPrice = +wrapper.find("#price").text();

    expect.assertions(1);
    expect(itemPrice).toEqual(mockItem.price);
  });

  it("renders out item quantity correctly", () => {
    const itemQty = +wrapper.find("#qty").text();

    expect.assertions(1);
    expect(itemQty).toEqual(mockItem.quantity);
  });
});
