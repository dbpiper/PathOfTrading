import React from 'react';

import styled, { css } from 'styled-components';

import noselect from 'shared/styles/noselect';

import Arrow from 'media/images/svg/Arrow_19.884x13.259.svg';

import Constants from 'constants/Constants';

import MediaQuery from 'shared/helpers/MediaQuery';

const buttonSizeMediaQueries = MediaQuery.create([
      {
        property: 'width',
        function: MediaQuery.numberToSize,
        args: {
          sizes: Constants.Buttons.Dropdown.width.sizes,
        },
        recipeArgsGetter: (args, index) => {
          return {
            size: args.sizes[index],
            unit: Constants.Buttons.Dropdown.width.unit,
          };
        },
      },
      {
        heightBased: true,
        property: 'height',
        function: MediaQuery.numberToSize,
        args: {
          sizes: Constants.Buttons.Dropdown.height.sizes,
        },
        recipeArgsGetter: (args, index) => {
          return {
            size: args.sizes[index],
            unit: Constants.Buttons.Dropdown.height.unit,
          };
        },
      },

]);

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

      -webkit-border-radius: 0 ${borderRadius()} ${borderRadius()} 0;
         -moz-border-radius: 0 ${borderRadius()} ${borderRadius()} 0;
              border-radius: 0 ${borderRadius()} ${borderRadius()} 0;

      ${props => props.search && css`
          display: none;
      `}

      ${buttonSizeMediaQueries}
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
