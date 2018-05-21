import { css } from 'styled-components';

import standardFont from './standardFont';
import textboxBackground from './textboxBackground';
import placeholder from './placeholder';

import Constants from '../../constants/Constants';

const borderRadius = () => {
  return Constants.Textbox.borderRadus + Constants.Textbox.borderRadiusUnit;
};

const textbox = css`

  ${placeholder}

  &:focus {
    outline: none;
    border: none;
    border-color: transparent;
    -webkit-box-shadow: none;
            box-shadow: none;
  }

  & {

    ${standardFont}
    ${textboxBackground}

    border: none;
    border-color: transparent;
    -webkit-box-shadow: none;
            box-shadow: none;

    caret-color: #FEFDFF;

    -webkit-border-radius: ${borderRadius()};
       -moz-border-radius: ${borderRadius()};
            border-radius: ${borderRadius()};
  }
`;

export default textbox;
