import React from 'react';
import styled from 'styled-components';

import standardFont from '../../../shared/styles/standardFont';

const Div = styled.label`
    & {
      ${standardFont}
    }
`;

function Tab(props) {
  return (
    <Div>
      {props.title}
    </Div>
  );
}

export default Tab;
