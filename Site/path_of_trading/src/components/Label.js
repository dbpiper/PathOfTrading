import React from 'react';

import styled from 'styled-components';

const LabelEle = styled.label`
    & {
      font-family: 'Open Sans', sans-serif;
      font-weight: 300;
      font-size: 20px;
      color: #FEFDFF;

      margin-right: 20%;
    }
`;

function Label(props) {
  return (
    <LabelEle>
      {props.value}
    </LabelEle>
  );
}

export default Label
