import CartDropdown from "./cart-dropdown.component";
import { shallow } from "enzyme";
import React from "react";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import CartItem from "../cart-item/cart-item.component";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("CartDropdown component", () => {
  let wrapper;
  let mockHistory;
  let mockDispatch;
  let mockCartItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

  beforeEach(() => {
    mockHistory = {
      push: jest.fn(),
    };

    mockDispatch = jest.fn();

    const mockProps = {
      history: mockHistory,
      dispatch: mockDispatch,
      cartItems: mockCartItems,
    };

    wrapper = shallow(<CartDropdown {...mockProps} />);
  });

  it("renders CartDropdown withour crashing", () => {
    expect.assertions(1);
    expect(wrapper).toMatchSnapshot();
  });

  it("should call history.push when CartDropdownButton is clicked", () => {
    wrapper.find("CartDropdownButton").simulate("click");

    expect.assertions(2);

    expect(mockHistory.push).toHaveBeenCalled();
    expect(mockHistory.push).toHaveBeenCalledWith("/checkout");
  });

  it("should dispatch correctly when CartDropdownButton is clicked", () => {
    wrapper.find("CartDropdownButton").simulate("click");

    expect.assertions(2);

    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith(toggleCartHidden());
  });

  it("should render out the correct amount of CartItems", () => {
    const cartItem = wrapper.find(CartItem);

    expect.assertions(1);
    expect(cartItem.length).toEqual(mockCartItems.length);
  });

  it("should render EmptyMessageContainer if cartItems is empty", () => {
    const mockProps = {
      cartItems: [],
      history: jest.fn(),
      dispatch: jest.fn(),
    };

    const newWrapper = shallow(<CartDropdown {...mockProps} />);

    expect.assertions(1);
    expect(newWrapper.exists("EmptyMessageContainer")).toEqual(true);
  });
});
