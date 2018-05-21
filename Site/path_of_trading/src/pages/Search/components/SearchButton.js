import React from 'react';

import styled, { css } from 'styled-components';

import MediaQuery from 'shared/helpers/MediaQuery';

import Constants from 'constants/Constants';

import standardFont from 'shared/styles/standardFont';
import noselect from 'shared/styles/noselect';


const buttonSizeMediaQueries = MediaQuery.create([
      {
        property: 'width',
        function: MediaQuery.numberToSize,
        args: {
          sizes: Constants.Buttons.Search.width.sizes,
        },
        recipeArgsGetter: (args, index) => {
          return {
            size: args.sizes[index],
            unit: Constants.Buttons.Search.width.unit,
          };
        },
      },
      {
        property: 'height',
        function: MediaQuery.numberToSize,
        args: {
          sizes: Constants.Buttons.Search.height.sizes,
        },
        recipeArgsGetter: (args, index) => {
          return {
            size: args.sizes[index],
            unit: Constants.Buttons.Search.height.unit,
          };
        },
      },

]);

const borderRadius = () => {
  return Constants.Buttons.Search.borderRadus + Constants.Buttons.Search.borderRadiusUnit;
};

const Button = styled.button`
      background-color: ${Constants.Colors.buttonPrimary};
      padding-top: ${Constants.Buttons.Search.paddingTop}${Constants.Buttons.Search.paddingTopUnit};
      padding-bottom: ${Constants.Buttons.Search.paddingBottom}${Constants.Buttons.Search.paddingBottomUnit};
      padding-left: ${Constants.Buttons.Search.paddingLeft}${Constants.Buttons.Search.paddingLeftUnit};
      padding-right: ${Constants.Buttons.Search.paddingRight}${Constants.Buttons.Search.paddingRightUnit};
      border: none;
      ${noselect}
      ${standardFont}
      highlight: none;
      outline-width: 0;
      cursor: pointer;

      ${buttonSizeMediaQueries};

      -webkit-border-radius: 0 ${borderRadius()} ${borderRadius()} 0;
         -moz-border-radius: 0 ${borderRadius()} ${borderRadius()} 0;
              border-radius: 0 ${borderRadius()} ${borderRadius()} 0;

      ${props => !props.search && css`
          display: none;
      `}
`;


function SearchButton(props) {
  return (
      <Button {...props} onClick={props.onClick}>
        {props.searchText}
      </Button>
  );
}

export default SearchButton;
