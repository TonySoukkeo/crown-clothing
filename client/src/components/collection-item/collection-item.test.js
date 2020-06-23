import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({
  adapter: new Adapter(),
});

import CollectionItem from "./collection-item.component";

let wrapper;
const item = {
  name: "Brown hat",
  price: 25.36,
  imageUrl: "https://someimage.com",
};

beforeEach(() => {
  wrapper = shallow(<CollectionItem item={item} />);
});

it("renders colelction-item without crashing", () => {
  expect.assertions(1);
  expect(wrapper).toMatchSnapshot();
});

describe("Checks if CollectionItem renders correctly", () => {
  it("has correct imageUrl for backgroundImage", () => {
    const backgroundImage = wrapper.find(".image");

    expect.assertions(1);

    expect(backgroundImage.props("imageUrl").imageUrl).toBe(item.imageUrl);
  });

  it("renders item name correctly", () => {
    const itemName = wrapper.find("NameContainer");

    expect.assertions(1);
    expect(itemName.text()).toBe(item.name);
  });

  it("renders item price correctly", () => {
    const itemPrice = wrapper.find("PriceContainer");

    expect.assertions(1);
    expect(+itemPrice.text()).toBe(item.price);
  });
});
