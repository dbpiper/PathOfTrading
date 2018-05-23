import { css } from 'styled-components';

import Colors from 'constants/Colors';
import Fonts from 'constants/Fonts';

const standardFont = css`
    color: ${Colors.standardFont};

    font-family: ${Fonts.Standard.fontFamily};
    font-weight: ${Fonts.Standard.fontWeight};
    font-size: ${Fonts.Standard.fontSize}${Fonts.Standard.fontSizeUnit};
`;

export default standardFont;
