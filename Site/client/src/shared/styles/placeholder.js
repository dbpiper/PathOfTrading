import { css } from 'styled-components';

import standardFont from './standardFont';

const placeholder = css`
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
`;

export default placeholder;
