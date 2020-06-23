import React from "react";

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, updateCart, currentUser }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img id="image" src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer id="item-name">{name}</TextContainer>
      <QuantityContainer>
        <div
          id="remove-item"
          onClick={() =>
            updateCart(currentUser, { item: cartItem, type: "remove" })
          }
        >
          &#10094;
        </div>
        <span id="qty">{quantity}</span>
        <div
          id="add-item"
          onClick={() =>
            updateCart(currentUser, { item: cartItem, type: "add" })
          }
        >
          &#10095;
        </div>
      </QuantityContainer>
      <TextContainer id="price">{price}</TextContainer>
      <RemoveButtonContainer
        onClick={() =>
          updateCart(currentUser, { item: cartItem, type: "clear-item" })
        }
      >
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
