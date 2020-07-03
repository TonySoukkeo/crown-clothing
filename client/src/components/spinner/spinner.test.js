import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Spinner from "./spinner.component";

configure({
  adapter: new Adapter(),
});

describe("tests spinner component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Spinner />);
  });

  it("renders spinner component without crashing", () => {
    expect.assertions(1);
    expect(wrapper).toMatchSnapshot();
  });
});
