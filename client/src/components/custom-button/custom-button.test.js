import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import CustomButton from "./custom-button.component";

configure({
  adapter: new Adapter(),
});

describe("CustomButton component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CustomButton />);
  });

  it("renders CustomButton without crashing", () => {
    expect.assertions(1);
    expect(wrapper).toMatchSnapshot();
  });
});
