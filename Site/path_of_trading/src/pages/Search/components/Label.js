import React from 'react';
import styled from 'styled-components';

import Fonts from 'constants/Fonts';
import TextCursor from 'media/images/cur/beam_black.cur';
import standardFont from 'shared/styles/standardFont';


const LabelEle = styled.label`
    & {
      ${standardFont}
    }

    &&& {

      font-size: ${props => props.heading ? Fonts.Standard.fontSizeHeading+Fonts.Standard.fontSizeUnit : ''};
      cursor: url(${TextCursor}), text;
    }
`;

function Label(props) {
  return (
    <LabelEle {...props}>
      {props.value}
    </LabelEle>
  );
}

export default Label;
