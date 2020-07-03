import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Directory from "./directory.component";
import { default as MenuItem } from "../menu-item/menu-item.container";

configure({
  adapter: new Adapter(),
});

describe("Directory component", () => {
  let wrapper;
  let mockSections;
  beforeEach(() => {
    mockSections = [{ id: 1, id: 2 }];

    wrapper = shallow(<Directory sections={mockSections} />);
  });

  it("renders Directory component without crashing", () => {
    expect.assertions(1);
    expect(wrapper).toMatchSnapshot();
  });

  it("displays the correct number of MenuItems", () => {
    expect.assertions(1);
    expect(wrapper.find(MenuItem).length).toEqual(mockSections.length);
  });

  it("outputs an empty array if there are no sections", () => {
    const mockSections = [];

    const wrapper2 = shallow(<Directory sections={mockSections} />);

    expect(wrapper2.children().length).toEqual(0);
  });
});
