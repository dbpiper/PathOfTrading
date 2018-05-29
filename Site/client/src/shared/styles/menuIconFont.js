import { css } from 'styled-components';

import Colors from 'constants/Colors';
import Fonts from 'constants/Fonts';

const menuIconFont = css`
    color: ${Colors.menuIconFont};

    font-family: ${Fonts.MenuIcon.fontFamily};
    font-weight: ${Fonts.MenuIcon.fontWeightStandard};
    font-size: ${Fonts.MenuIcon.fontSize}${Fonts.MenuIcon.fontSizeUnit};
`;

export default menuIconFont;
