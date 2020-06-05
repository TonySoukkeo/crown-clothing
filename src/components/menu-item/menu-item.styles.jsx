import styled, { css } from "styled-components";

const largeMenuSize = css`
  height: 380px;
`;

const backgroundImageHoverStyles = css`
  transform: scale(1.1);
  transition: transform 6s;
  cubic-bezier(0.25, 0.45, 0.45, 0.95);
`;

const getMenuItemSize = ({ size }) => (size === "Large" ? largeMenuSize : null);

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const MenuItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    ${backgroundImageHoverStyles}
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  ${getMenuItemSize}
`;

export const ContentContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
`;

export const TitleContainer = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

export const SubTitleContainer = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;
