import React from 'react';
import styled from 'styled-components';

import headingFont from '../../../shared/styles/headingFont';

import Dropdown from './Dropdown';

const Div = styled.div`
    & {
      ${headingFont}
    }
`;

function Heading(props) {
  return (
    <Div>
      {props.title}

          <Dropdown placeholder="Hello"/>

    </Div>
  );
}

export default Heading;
