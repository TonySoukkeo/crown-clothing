import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import CollectionsOverview from "./collections-overview.component";
import { default as CollectionPreview } from "../collection-preview/collection-preview.container";

configure({
  adapter: new Adapter(),
});

describe("CollectionsOverview component", () => {
  let wrapper;
  let mockCollections;

  beforeEach(() => {
    mockCollections = [
      {
        id: 1,
      },
      { id: 2 },
      { id: 3 },
    ];

    wrapper = shallow(<CollectionsOverview collections={mockCollections} />);
  });

  it("renders CollectionsOverview without crashing", () => {
    expect.assertions(1);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders out correct number of CollectionPreview elements", () => {
    const collectionPreview = wrapper.find(CollectionPreview);

    expect.assertions(1);
    expect(collectionPreview.length).toEqual(mockCollections.length);
  });
});
