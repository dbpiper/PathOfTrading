import { css } from 'styled-components';

import Constants from '../../constants/Constants';

const headingFont = css`
    color: ${Constants.Colors.headingFont};

    font-family: ${Constants.Fonts.Heading.fontFamily};
    font-weight: ${Constants.Fonts.Heading.fontWeightStandard};
    font-size: ${Constants.Fonts.Heading.fontSize}${Constants.Fonts.Heading.fontSizeUnit};
`;

export default headingFont;