import { css } from 'styled-components';
import Constants from '../../constants/Constants';
import standardFont from './standardFont';
import textboxBackground from './textboxBackground';

const borderRadius = () => {
  return Constants.Textbox.borderRadus + Constants.Textbox.borderRadiusUnit;
};

const textbox = css`

  /* Chrome, Firefox, Opera, Safari 10.1+ */
  &::placeholder {
    ${standardFont}
    opacity: 1;
  }

  /* Chrome < 57, Opera < 44, Safari < 10.1 */
  &::-webkit-input-placeholder {
    ${standardFont}
    opacity: 1;
  }

  /* Microsoft Edge */
  &::-ms-input-placeholder {
    ${standardFont}
    opacity: 1;
  }

  /* Internet Explorer 10-11 */
  &:-ms-input-placeholder {
    ${standardFont}
    opacity: 1;
  }

  /* 19 <= Firefox < 51 */
  &::-moz-placeholder {
    ${standardFont}
    opacity: 1;
  }

  /* 2 <= Firefox < 19 */
  &:-moz-placeholder {
    ${standardFont}
    opacity: 1;
  }

  &:focus {
    outline: none;
    border: none;
      border-color: none;
      -webkit-box-shadow: none;
              box-shadow: none;
  }

  & {

    ${standardFont}
    ${textboxBackground}

    border: none;
    border-color: none;
    -webkit-box-shadow: none;
            box-shadow: none;

    height: ${Constants.Textbox.height}${Constants.Textbox.heightUnit};
    width: ${Constants.Textbox.width}${Constants.Textbox.widthUnit};

    caret-color: #FEFDFF;

    -webkit-border-radius: ${borderRadius()};
       -moz-border-radius: ${borderRadius()};
            border-radius: ${borderRadius()};
  }
`;

export default textbox
