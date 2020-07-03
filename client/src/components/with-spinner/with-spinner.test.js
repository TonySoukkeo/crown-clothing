import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import WithSpinner from "./with-spinner.component";
import Spinner from "../spinner/spinner.component";

configure({
  adapter: new Adapter(),
});

describe("WithSpinner HOC", () => {
  let wrapper;
  const TestComponent = () => <div />;

  beforeEach(() => {
    const WrappedComponent = WithSpinner(TestComponent);

    wrapper = shallow(<WrappedComponent isLoading={true} />);
  });

  it("renders withSpinner without crashing", () => {
    expect.assertions(1);
    expect(wrapper).toMatchSnapshot();
  });

  describe("if loading is true", () => {
    it("should render Spinner component", () => {
      expect.assertions(1);
      expect(wrapper.find(Spinner).exists()).toEqual(true);
    });

    it("should not render wrapped copmonent", () => {
      expect.assertions(1);
      expect(wrapper.find(TestComponent).exists()).toEqual(false);
    });
  });

  describe("if loading is false", () => {
    it("should not render spinner component", () => {
      const WrappedComponent = WithSpinner(TestComponent);

      const wrapper2 = shallow(<WrappedComponent isLoading={false} />);

      expect.assertions(1);
      expect(wrapper2.find(TestComponent).exists()).toEqual(true);
    });

    it("should not render spinner", () => {
      const WrappedComponent = WithSpinner(TestComponent);

      const wrapper2 = shallow(<WrappedComponent isLoading={false} />);

      expect.assertions(1);
      expect(wrapper2.find(Spinner).exists()).toEqual(false);
    });
  });
});
