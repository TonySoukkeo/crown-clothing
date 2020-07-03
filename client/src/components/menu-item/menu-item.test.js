import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MenuItem from "./menu-item.component";

configure({
  adapter: new Adapter(),
});

describe("MenuItem component", () => {
  let wrapper;
  let mockItem;
  let mockHistory;
  let mockLinkUrl;
  let mockMatch;

  beforeEach(() => {
    mockItem = {
      title: "Blue hat",
      imageUrl: "http://bluehat.com",
      size: "small",
    };

    mockHistory = {
      push: jest.fn(),
    };

    mockLinkUrl = "/hats";
    mockMatch = {
      url: "/shop",
    };

    const mockProps = {
      ...mockItem,
      history: mockHistory,
      linkUrl: mockLinkUrl,
      match: mockMatch,
    };

    wrapper = shallow(<MenuItem {...mockProps} />);
  });

  it("renders MenuItem component without crashing", () => {
    expect.assertions(1);
    expect(wrapper).toMatchSnapshot();
  });

  it("calls history.push when clicked", () => {
    wrapper.find("MenuItemContainer").simulate("click");

    expect.assertions(2);
    expect(mockHistory.push).toHaveBeenCalled();
    expect(mockHistory.push).toHaveBeenCalledWith(
      `${mockMatch.url}${mockLinkUrl}`
    );
  });

  it("has the correct imageUrl for the BackgroundImageContainer", () => {
    const backgroundImageContainer = wrapper
      .find("BackgroundImageContainer")
      .prop("imageUrl");

    expect(backgroundImageContainer).not.toBeUndefined();
    expect(backgroundImageContainer).toBe(mockItem.imageUrl);
  });

  it("has a size property on MenuItemContainer", () => {
    const menuItemContainer = wrapper.find("MenuItemContainer").prop("size");

    expect.assertions(2);
    expect(menuItemContainer).not.toBeUndefined();
    expect(menuItemContainer).toBe(mockItem.size);
  });

  it("displays the title", () => {
    const contentTitle = wrapper.find("ContentTitle");

    expect.assertions(2);
    expect(contentTitle.length).toEqual(1);
    expect(contentTitle.text()).toBe(mockItem.title.toUpperCase());
  });

  it("displays a content subtitle", () => {
    const contentSubtitle = wrapper.find("ContentSubtitle");

    expect.assertions(2);
    expect(contentSubtitle.exists()).toEqual(true);
    expect(contentSubtitle.length).toEqual(1);
  });
});
