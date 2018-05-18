import React from 'react';
import styled from 'styled-components';

import standardFont from 'shared/styles/standardFont';

const LabelEle = styled.label`
    & {
      ${standardFont}
    }
`;

function Label(props) {
  return (
    <LabelEle>
      {props.value}
    </LabelEle>
  );
}

export default Label;
