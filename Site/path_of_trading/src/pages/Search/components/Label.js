import React from 'react';
import styled from 'styled-components';

import standardFont from 'shared/styles/standardFont';

import TextCursor from 'public/cur/beam_black.cur';

import Constants from 'constants/Constants';

const LabelEle = styled.label`
    & {
      ${standardFont}
    }

    &&& {

      font-size: ${props => props.heading ? Constants.Fonts.Standard.fontSizeHeading+Constants.Fonts.Standard.fontSizeUnit : ''};
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
