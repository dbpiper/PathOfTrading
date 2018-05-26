import React from 'react';

import ColorsFieldConstants from '../constants/ColorsFieldConstants';
import ColorField from './ColorField';

function ColorsField(props) {
  return (
    <React.Fragment>
          <ColorField
            placeholder={ColorsFieldConstants.Red.placeholder}
            underlineColor={ColorsFieldConstants.Red.underlineColor}
            focusedUnderlineColor={ColorsFieldConstants.Red.focusedUnderlineColor}
            hoveredUnderlineColor={ColorsFieldConstants.Red.hoveredUnderlineColor}
          />
          <ColorField
            placeholder={ColorsFieldConstants.Green.placeholder}
            underlineColor={ColorsFieldConstants.Green.underlineColor}
            focusedUnderlineColor={ColorsFieldConstants.Green.focusedUnderlineColor}
            hoveredUnderlineColor={ColorsFieldConstants.Green.hoveredUnderlineColor}
          />
          <ColorField
            placeholder={ColorsFieldConstants.Blue.placeholder}
            underlineColor={ColorsFieldConstants.Blue.underlineColor}
            focusedUnderlineColor={ColorsFieldConstants.Blue.focusedUnderlineColor}
            hoveredUnderlineColor={ColorsFieldConstants.Blue.hoveredUnderlineColor}
          />
          <ColorField
            placeholder={ColorsFieldConstants.White.placeholder}
            underlineColor={ColorsFieldConstants.White.underlineColor}
            focusedUnderlineColor={ColorsFieldConstants.White.focusedUnderlineColor}
            hoveredUnderlineColor={ColorsFieldConstants.White.hoveredUnderlineColor}
          />

    </React.Fragment>
  );
}

export default ColorsField;
