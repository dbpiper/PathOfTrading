import React from 'react';

import NumericField from './NumericField';

import styled from 'styled-components';

const RangeContainer = styled.span`
    & {
      position: relative;
      display: flex;

      align-items: center;


      width: 100%;
    }
`;

function Range(props) {
  return (
    <RangeContainer>
        <NumericField placeholder="Min" />
        <NumericField placeholder="Max" />
    </RangeContainer>
  );
}

export default Range
