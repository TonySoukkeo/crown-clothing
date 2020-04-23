import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory;

export const selectDirecotrySections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
