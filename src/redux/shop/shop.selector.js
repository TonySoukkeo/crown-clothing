import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopCollection = createSelector(
  [selectShop],
  (shop) => shop.collection
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectShopCollection],
    (collections) => collections[collectionUrlParam]
  );

export const selectCollectionsForPreview = createSelector(
  [selectCollection],
  (collections) => Object.keys(collections).map((key) => collections[key])
);
