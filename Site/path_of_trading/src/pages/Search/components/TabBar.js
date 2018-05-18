import React from 'react';
import styled from 'styled-components';

import standardFont from 'shared/styles/standardFont';

import Tab from './Tab';

const Div = styled.label`
    & {
      ${standardFont}
    }
`;

function TabBar(props) {
  return (
    <Div>
      <Tab title="Item"/>
      <Tab title="Combat"/>
      <Tab title="Trading"/>
    </Div>
  );
}

export default TabBar;
