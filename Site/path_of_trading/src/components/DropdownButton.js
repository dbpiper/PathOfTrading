import React from 'react';

import styled from 'styled-components';

import noselect from './noselect';

import Arrow from '../public/svg/Arrow_23.198x15.468.svg';


const Button = styled.button`
      background-color: #79ADDC;
      padding-top: 10px;
      padding-bottom: 4px;
      padding-left: 8px;
      padding-right: 8px
      border: none;
      ${noselect}
      highlight: none;
      outline-width: 0;
      cursor: pointer;
`;

const Img = styled.img`
  ${noselect}
`


function DropdownButton(props) {
  return (
      <Button onClick={props.onClick}>
        <Img src={Arrow} />
      </Button>
  );
}

export default DropdownButton
