import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({
  adapter: new Adapter(),
});

import CollectionItem from "./collection-item.component";

describe("collection item component", () => {
  let wrapper;
  let mockItem;
  let mockUpdateCart;
  let mockCurrentUser;

  beforeEach(() => {
    mockItem = {
      name: "blue jeans",
      price: 59.99,
      imageUrl: "bluejeans.com",
    };

    mockCurrentUser = {
      name: "Jim",
      email: "jim@gmail.com",
    };

    mockUpdateCart = jest.fn();

    const mockProps = {
      item: mockItem,
      updateCart: mockUpdateCart,
      currentUser: mockCurrentUser,
    };

    wrapper = shallow(<CollectionItem {...mockProps} />);
  });

  it("renders collection item without crashing", () => {
    expect.assertions(1);
    expect(wrapper).toMatchSnapshot();
  });

  it("has the correct imageUrl for BackgroundImage", () => {
    const backgroundImage = wrapper.find("BackgroundImage").prop("imageUrl");

    expect.assertions(1);
    expect(backgroundImage).toBe(mockItem.imageUrl);
  });

  it("renders out item name", () => {
    const itemName = wrapper.find("NameContainer").text();

    expect.assertions(1);
    expect(itemName).toEqual(mockItem.name);
  });

  it("renders out item price", () => {
    const itemPrice = +wrapper.find("PriceContainer").text();

    expect.assertions(1);
    expect(itemPrice).toEqual(mockItem.price);
  });

  it("calls updateCart when AddButton is cliked", () => {
    wrapper.find("AddButton").simulate("click");

    const addItemPayload = {
      item: mockItem,
      type: "add",
    };

    expect.assertions(2);
    expect(mockUpdateCart).toHaveBeenCalled();
    expect(mockUpdateCart).toHaveBeenCalledWith(
      mockCurrentUser,
      addItemPayload
    );
  });
});
