import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import StripeButton from "./stripe-button.component";

import StripeCheckout from "react-stripe-checkout";

configure({
  adapter: new Adapter(),
});

describe("stripe button component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<StripeButton price={42} />);
  });

  it("renders stripe button component without crashing", () => {
    expect.assertions(1);
    expect(wrapper).toMatchSnapshot();
  });

  describe("tests stripe checkout component within stripe button component", () => {
    it("contains stripe checkout", () => {
      expect.assertions(1);
      expect(wrapper.find(StripeCheckout).exists()).toEqual(true);
    });

    it("contains all necessary props for StripeCheckout", () => {
      const stripeCheckout = wrapper.find(StripeCheckout);
      const labelProp = stripeCheckout.prop("label");
      const nameProp = stripeCheckout.prop("name");
      const billingAddressProp = stripeCheckout.prop("billingAddress");
      const imageProp = stripeCheckout.prop("image");
      const descriptionProp = stripeCheckout.prop("description");
      const amountProp = stripeCheckout.prop("amount");
      const panelLabelProp = stripeCheckout.prop("panelLabel");
      const tokenProp = stripeCheckout.prop("token");
      const stripeKeyProp = stripeCheckout.prop("stripeKey");

      expect.assertions(9);
      expect(labelProp).toBeDefined();
      expect(nameProp).toBeDefined();
      expect(billingAddressProp).toBeDefined();
      expect(imageProp).toBeDefined();
      expect(descriptionProp).toBeDefined();
      expect(amountProp).toBeDefined();
      expect(panelLabelProp).toBeDefined();
      expect(tokenProp).toBeDefined();
      expect(stripeKeyProp).toBeDefined();
    });
  });
});
