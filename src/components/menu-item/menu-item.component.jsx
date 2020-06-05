import React from "react";
import { withRouter } from "react-router-dom";

import {
  BackgroundImageContainer,
  MenuItemContainer,
  ContentContainer,
  TitleContainer,
  SubTitleContainer,
} from "./menu-item.styles.jsx";
// import "./menu-item.styles.scss";

const menuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <MenuItemContainer
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImageContainer
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <ContentContainer>
          <TitleContainer>{title.toUpperCase()}</TitleContainer>
          <SubTitleContainer>SHOP NOW</SubTitleContainer>
        </ContentContainer>
      </BackgroundImageContainer>
    </MenuItemContainer>
  );
};

export default withRouter(menuItem);
