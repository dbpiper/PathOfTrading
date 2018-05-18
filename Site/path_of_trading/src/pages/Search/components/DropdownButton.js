import React from 'react';

import styled, { css } from 'styled-components';

import noselect from 'shared/styles/noselect';

import Arrow from 'public/svg/Arrow_23.198x15.468.svg';

import Constants from 'constants/Constants';

const borderRadius = () => {
  return Constants.Buttons.Dropdown.borderRadus + Constants.Buttons.Dropdown.borderRadiusUnit;
};

const Button = styled.button`
      background-color: ${Constants.Colors.buttonPrimary};
      padding-top: ${Constants.Buttons.Dropdown.paddingTop}${Constants.Buttons.Dropdown.paddingTopUnit};
      padding-bottom: ${Constants.Buttons.Dropdown.paddingBottom}${Constants.Buttons.Dropdown.paddingBottomUnit};
      padding-left: ${Constants.Buttons.Dropdown.paddingLeft}${Constants.Buttons.Dropdown.paddingLeftUnit};
      padding-right: ${Constants.Buttons.Dropdown.paddingRight}${Constants.Buttons.Dropdown.paddingRightUnit};
      border: none;
      ${noselect}
      highlight: none;
      outline-width: 0;
      cursor: pointer;

      width: ${Constants.Buttons.Dropdown.width}${Constants.Buttons.Dropdown.widthUnit};
      height: ${Constants.Buttons.Dropdown.height}${Constants.Buttons.Dropdown.heightUnit};

      -webkit-border-radius: 0 ${borderRadius()} ${borderRadius()} 0;
         -moz-border-radius: 0 ${borderRadius()} ${borderRadius()} 0;
              border-radius: 0 ${borderRadius()} ${borderRadius()} 0;

      ${props => props.search && css`
          display: none;
      `}
`;

const Img = styled.img`
  ${noselect}
`


function DropdownButton(props) {
  return (
      <Button {...props} onClick={props.onClick}>
        <Img src={Arrow} />
      </Button>
  );
}

export default DropdownButton;
