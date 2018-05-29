import { css } from 'styled-components';

import Colors from 'constants/Colors';
import Fonts from 'constants/Fonts';

const tooltipFont = css`
    color: ${Colors.tooltipFont};

    font-family: ${Fonts.Tooltip.fontFamily};
    font-weight: ${Fonts.Tooltip.fontWeight};
    font-size: ${Fonts.Tooltip.fontSize}${Fonts.Tooltip.fontSizeUnit};
`;

export default tooltipFont;
