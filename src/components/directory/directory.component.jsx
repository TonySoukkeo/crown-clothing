import React, { Component } from "react";
import { connect } from "react-redux";
import { selectDirecotrySections } from "../../redux/directory/directory.selectors";
import MenuItem from "../menu-item/menu-item.component";
import { createStructuredSelector } from "reselect";

import "./directory.styles.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionsProps }) => (
        <MenuItem key={id} {...otherSectionsProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirecotrySections,
});

export default connect(mapStateToProps)(Directory);
