import React from "react";
import { shallow, configure } from "enzyme";
import CartIcon from "./cart-icon.component";

import Adapter from "enzyme-adapter-react-16";

configure({
  adapter: new Adapter(),
});

let wrapper;

beforeEach(() => {
  wrapper = shallow(<CartIcon />);
});

it("renders cart-icon component without crashing", () => {
  expect.assertions(1);
  expect(wrapper).toMatchSnapshot();
});
