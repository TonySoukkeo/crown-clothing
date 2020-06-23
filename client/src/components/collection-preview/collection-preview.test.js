import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({
  adapter: new Adapter(),
});

import CollectionPreview from "./collection-preview.component";

describe("CollectionPreview component", () => {
  let wrapper;
  let mockMatch;
  let mockHistory;
  const mockRouteName = "hats";

  beforeEach(() => {
    mockMatch = {
      path: "/shop",
    };

    mockHistory = {
      push: jest.fn(),
    };

    const mockProps = {
      match: mockMatch,
      history: mockHistory,
      routeName: mockRouteName,
      title: "hats",
      items: [],
    };

    wrapper = shallow(<CollectionPreview {...mockProps} />);
  });

  it("should render CollectionPreview component without crashing", () => {
    expect.assertions(1);
    expect(wrapper).toMatchSnapshot();
  });

  it("should call history.push with the right string when TitleContainer is clicked", () => {
    wrapper.find("TitleContainer").simulate("click");

    expect.assertions(1);
    expect(mockHistory.push).toBeCalledWith(
      `${mockMatch.path}/${mockRouteName}`
    );
  });
});
