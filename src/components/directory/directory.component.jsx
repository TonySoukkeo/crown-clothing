import React from "react";
import { connect } from "react-redux";
import { selectDirecotrySections } from "../../redux/directory/directory.selectors";
import MenuItem from "../menu-item/menu-item.component";
import { createStructuredSelector } from "reselect";

import { DirectoryMenuContainer } from "./directory.styles.jsx";

const Directory = ({ sections }) => {
  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...otherSectionsProps }) => (
        <MenuItem key={id} {...otherSectionsProps} />
      ))}
    </DirectoryMenuContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirecotrySections,
});

export default connect(mapStateToProps)(Directory);
