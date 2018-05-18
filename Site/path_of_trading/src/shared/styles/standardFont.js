import { css } from 'styled-components';

import Constants from '../../constants/Constants';

const standardFont = css`
    color: ${Constants.Colors.standardFont};

    font-family: ${Constants.Fonts.Standard.fontFamily};
    font-weight: ${Constants.Fonts.Standard.fontWeight};
    font-size: ${Constants.Fonts.Standard.fontSize}${Constants.Fonts.Standard.fontSizeUnit};
`;

export default standardFont;
