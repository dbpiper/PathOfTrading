import React from 'react';
import styled, { css } from 'styled-components';

import textbox from 'shared/styles/textbox';

import MediaQuery from 'shared/helpers/MediaQuery';

import Constants from 'constants/Constants';

import Range from './Range';

const borderRadius = (props) => {
  if (!props.search) {
    return Constants.Textbox.borderRadus + Constants.Textbox.borderRadiusUnit;
  } else {
    return Constants.SearchBox.borderRadus + Constants.SearchBox.borderRadiusUnit;
  }
};

function getBorderCss(props) {
  return css`
     -webkit-border-radius: ${borderRadius(props)} 0 0 ${borderRadius(props)};
        -moz-border-radius: ${borderRadius(props)} 0 0 ${borderRadius(props)};
             border-radius: ${borderRadius(props)} 0 0 ${borderRadius(props)};
  `;
}

const TextboxInput = styled.input.attrs({
  type: "text",
})`
   ${textbox}

   &&& {
      ${props => Textbox.makeWidthMediaQueries(props)}
      ${props => Textbox.makeHeightMediaQueries(props)}

      ${props => props.hasButton && getBorderCss(props)};
   }
`;


const TextboxDiv = styled.div`
  position: relative;
  display: flex;

`;

const TextboxSibling = styled.div`
  ${TextboxDiv} > & {
    position: absolute;
    display: ${props => props.canBeRanged && props.isRanged ? 'flex' : 'none'};
    right: ${Constants.Textbox.Ranged.rightOffset}${Constants.Textbox.Ranged.rightOffsetUnit};
    bottom: ${Constants.Textbox.Ranged.bottomOffset}${Constants.Textbox.Ranged.bottomOffsetUnit};
  }
`;


class Textbox extends React.Component {

  static makeHeightMediaQueries(props) {

    if (!props.search) {
      return MediaQuery.create([
        {
          heightBased: true,
          property: 'height',
          function: MediaQuery.numberToSize,
          args: {
            sizes: Constants.Textbox.height.sizes,
          },
          recipeArgsGetter: (args, index) => {
            return {
              size: args.sizes[index],
              unit: Constants.Textbox.height.unit,
            };
          },
        },
      ]);
    } else {
      return MediaQuery.create([
        {
          heightBased: true,
          property: 'height',
          function: MediaQuery.numberToSize,
          args: {
            sizes: Constants.SearchBox.height.sizes,
          },
          recipeArgsGetter: (args, index) => {
            return {
              size: args.sizes[index],
              unit: Constants.SearchBox.height.unit,
            };
          },
        },
      ]);

    }
  }
  static makeWidthMediaQueries(props) {
    if (props.width) {
      if (Array.isArray(props.width)) {
        return MediaQuery.create([
          {
            property: 'width',
            function: MediaQuery.numberToSize,
            args: {
              sizes: props.width,
            },
            recipeArgsGetter: (args, index) => {
              return {
                size: args.sizes[index],
                unit: Constants.Textbox.width.unit,
              };
            },
          },
        ]);
      }
      else {
        return 'width: ' + props.width;
      }
    }
    else {
      if (!props.search) {
        const textboxSizes = props.canBeRanged ? Constants.Textbox.width.rangedSizes
          : Constants.Textbox.width.sizes;

        return MediaQuery.create([
          {
            property: 'width',
            function: MediaQuery.numberToSize,
            args: {
              sizes: textboxSizes,
            },
            recipeArgsGetter: (args, index) => {
              return {
                size: args.sizes[index],
                unit: Constants.Textbox.width.unit,
              };
            },
          },
        ]);
      } else {
        return MediaQuery.create([
          {
            property: 'width',
            function: MediaQuery.numberToSize,
            args: {
              sizes: Constants.SearchBox.width.sizes,
            },
            recipeArgsGetter: (args, index) => {
              return {
                size: args.sizes[index],
                unit: Constants.SearchBox.width.unit,
              };
            },
          },
        ]);
      }
    }
  }

  render() {
    return (
      <TextboxDiv>
        <TextboxInput
          {...this.props}
        />
        <TextboxSibling canBeRanged={this.props.canBeRanged} isRanged={this.props.isRanged}>
          <Range small={true}/>
        </TextboxSibling>
      </TextboxDiv>
    );
  }

}

export default Textbox;
