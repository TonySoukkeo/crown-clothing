import React from "react";
import { shallow, configure } from "enzyme";
import CartIcon from "./cart-icon.component";

import Adapter from "enzyme-adapter-react-16";

configure({
  adapter: new Adapter(),
});

describe("CartIcon component", () => {
  let wrapper;
  let mockToggleCartHidden;
  const mockItemCount = 5;

  beforeEach(() => {
    mockToggleCartHidden = jest.fn();

    const mockProps = {
      toggleCartHidden: mockToggleCartHidden,
      itemCount: mockItemCount,
    };

    wrapper = shallow(<CartIcon {...mockProps} />);
  });

  it("renders CartIcon without crashing", () => {
    expect.assertions(1);
    expect(wrapper).toMatchSnapshot();
  });

  it("calls toggleCartHidden when clicked", () => {
    wrapper.find("CartContainer").simulate("click");

    expect.assertions(1);
    expect(mockToggleCartHidden).toHaveBeenCalled();
  });

  it("should render itemCount as text correctly", () => {
    const itemCount = +wrapper.find("ItemCountContainer").text();

    expect.assertions(1);
    expect(itemCount).toBe(mockItemCount);
  });
});
