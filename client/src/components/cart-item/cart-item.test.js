import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mockCartItem } from "../../redux/mockStore";

configure({
  adapter: new Adapter(),
});

import CartItem from "./cart-item.component";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<CartItem item={mockCartItem} />);
});

it("renders cart-item component without crashing", () => {
  expect.assertions(1);
  expect(wrapper).toMatchSnapshot();
});

describe("checks if cart-item component renders all information correctly", () => {
  it("chekcs if cart-item renders item quantity correctly", () => {
    const qtyDisplay = wrapper.find("#qty");

    expect.assertions(1);

    expect(+qtyDisplay.text()).toEqual(mockCartItem.quantity);
  });

  it("checks if cart-item renders item name correctly", () => {
    const nameDisplay = wrapper.find("#name");

    expect.assertions(1);
    expect(nameDisplay.text()).toEqual(mockCartItem.name);
  });

  it("checks if cart-item renders item price correctly", () => {
    const priceDisplay = wrapper.find("#price");

    expect.assertions(1);
    expect(+priceDisplay.text()).toEqual(mockCartItem.price);
  });

  it("checks if cart-item has src prop", () => {
    const cartImage = wrapper.find("CartItemImage");

    expect.assertions(2);
    expect(cartImage.prop("src")).not.toBe(undefined);
    expect(cartImage.prop("src")).toEqual(mockCartItem.imageUrl);
  });
});
