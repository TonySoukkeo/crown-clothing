import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mockCartItem } from "../../redux/mockStore";

configure({ adapter: new Adapter() });

import CheckoutItem from "./checkout-item.component";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<CheckoutItem cartItem={mockCartItem} />);
});

it("checks if CheckoutItem renders without crashing", () => {
  expect.assertions(1);
  expect(wrapper).toMatchSnapshot();
});

describe("checks to see if it renders all cartItem values correctly", () => {
  // test some stuff
  it("checks if ImageContainer has an img children", () => {
    const imageContainer = wrapper.find("ImageContainer");
    const imageChildren = imageContainer.children().html();

    const imageDiv = `<img id="image" src="${mockCartItem.imageUrl}" alt="item"/>`;

    expect.assertions(2);

    expect(imageChildren).not.toBe(undefined);
    expect(imageChildren).toEqual(imageDiv);
  });

  it("checks if name is being rendered correctly", () => {
    const textContainer = wrapper.find("#item-name");

    expect.assertions(1);

    expect(textContainer.text()).toBe(mockCartItem.name);
  });
});
