import { css } from 'styled-components';

import Colors from 'constants/Colors';
import Fonts from 'constants/Fonts';

const headingFont = css`
    color: ${Colors.headingFont};

    font-family: ${Fonts.Heading.fontFamily};
    font-weight: ${Fonts.Heading.fontWeightStandard};
    font-size: ${Fonts.Heading.fontSize}${Fonts.Heading.fontSizeUnit};
`;

export default headingFont;
