import CartDropdown from "./cart-dropdown.component";
import { shallow } from "enzyme";
import React from "react";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
  const cartItems = [
    {
      id: 1,
      imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
      name: "Adidas Yeezy",
      price: 200,
      quantity: 1,
    },
  ];
  wrapper = shallow(<CartDropdown cartItems={cartItems} />);
});

it("renders cart-dropdown component correctly", () => {
  expect.assertions(1);

  expect(wrapper).toMatchSnapshot();
});
