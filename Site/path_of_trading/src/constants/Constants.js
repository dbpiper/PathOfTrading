const Constants = Object.freeze({

    Buttons: {
      Dropdown: {
        paddingTop: 10,
        paddingBottom: 4,
        paddingLeft: 8,
        paddingRight: 8,

        paddingTopUnit: 'px',
        paddingBottomUnit: 'px',
        paddingLeftUnit: 'px',
        paddingRightUnit: 'px',

        width: 64,
        height: 53,

        widthUnit: 'px',
        heightUnit: 'px',

        borderRadus: 3, //only on top right and bottom right
        borderRadiusUnit: 'px',
      },
      Search: {
        paddingTop: 10,
        paddingBottom: 4,
        paddingLeft: 8,
        paddingRight: 8,

        paddingTopUnit: 'px',
        paddingBottomUnit: 'px',
        paddingLeftUnit: 'px',
        paddingRightUnit: 'px',

        width: 100,
        height: 63,

        widthUnit: 'px',
        heightUnit: 'px',

        borderRadus: 3, //only on top right and bottom right
        borderRadiusUnit: 'px',
      },
    },
    Textbox: {
      height: 53,
      width: 180,
      heightUnit: 'px',
      widthUnit: 'px',
      padding: '10',
      paddingUnit: 'px',

      borderRadus: 3,
      borderRadiusUnit: 'px',

      Ranged: {
        rightOffset: 0,
        bottomOffset: 17.3761946134,
        rightOffsetUnit: '%',
        bottomOffsetUnit: '%',
      }
    },
    SearchBox: {
      height: 63,
      width: 430,
      heightUnit: 'px',
      widthUnit: 'px',
      padding: '10',
      paddingUnit: 'px',

      borderRadus: 3,
      borderRadiusUnit: 'px',
    },
    Strings: {
      search: "Search",
    },
    Colors: {
      buttonPrimary: '#79ADDC',
      buttonPrimaryLight: '#94bde3',
      textboxBackground: '#95A2A8', //'rgba(188, 212, 222, 0.42)',
      standardFont: '#FEFDFF',
      headingFont: '#FEFDFF',
      dropdownSelectedColor: '#304352',
      dropdownSelectedBackground: '#FEFDFF',
      underlineColor: '#0D0106',
      underlineColorFocused: '#FEFDFF',
      accent: '#BCD4DE',
      offBackground: '#93a8ac',
      offBorder: '#dfdfdf',
    },
    Dropdown: {
      Menu: {
        gap: 3,
        gapUnit: 'px',
      },
      Item: {
        selectedBorder: 1,
        selectedBorderUnit: 'px',

        selectedAccent: 5,
        selectedAccentUnit: 'px',

      },
    },
    ColorComponents: {
      Shared: {
        min: 0,
        max: 6,
      },
      Red: {
        placeholder: 'Red',
        underlineColor: '#831929',
        focusedUnderlineColor: '#ea8f9d',
      },
      Green: {
        placeholder: 'Green',
        underlineColor: '#5d9e0e',
        focusedUnderlineColor: '#82dd13',
      },
      Blue: {
        placeholder: 'Blue',
        underlineColor: '#1031A7',
        focusedUnderlineColor: '#8fa5f4',
      },
      White: {
        placeholder: 'White',
        underlineColor: '#dad3c1',
        focusedUnderlineColor: '#ffffff',
      },
    },
    AbstractNumericField: {
      marginRight: 20,
      smallMarginRight: 10,
      marginRightUnit: 'px',

      paddingTop: 10,
      paddingTopUnit: 'px',

      paddingRight: 10,
      paddingRightUnit: 'px',

      paddingBottom: 5,
      paddingBottomUnit: 'px',

      borderBottomWidth: 1,
      borderBottomWidthUnit: 'px',
    },
    Fonts: {
      Heading: {
        fontFamily: "'Playfair Display', serif",
        fontWeightStandard: 400,
        fontWeightBold: 700,
        fontSize: 2.5,
        fontSizeUnit: 'rem',
      },
      Standard: {
        fontFamily: "'Open Sans', sans-serif",
        fontWeight: 300,
        fontWeightSemiBold: 600,
        fontSizeHeading: 1.5625,
        fontSize: 1.25,
        fontSizeSmall: 1,
        fontSizeUnit: 'rem',
      }
    },
    Layout: {
      MediaQuery: {
        PortraitPhone: 0,
        LandscapePhone: 1,
        PortraitTablet: 2,
        LandscapeTablet: 3,
        SmallDesktop: 4,
        MediumDesktop: 5,
        LargeDesktop: 6,
      },
      Page: {
        Search: {
          Header: {
              gridRows: [
                  40,
                  40,
              ],
              gridRowUnit: '%',
              gridColumns: [
                40,
                13.0208333333333,
              ],

              gridColumnsPortraitPhone:
                [ 400, 150],
              gridColumnsLandscapePhone:
                [ 450, 175],
              gridColumnsPortraitTablet:
                [ 500, 200],
              gridColumnsLanscapeTablet:
                [ 550, 225], //TODO: fix the size of search box at this scale
              gridColumnsSmallDesktop:
                [ 600, 250],
              gridColumnsMediumDesktop:
                [ 650, 275],
              gridColumnsLargeDesktop:
                [ 700, 300],

              gridColumnUnit: 'px',
              width: 100,
              height: 30,
              widthUnit: '%',
              heightUnit: '%',
          },
          Body: {
            Combat: {
              gridRows: [
                  // 9.25925925926,
                  15,
                  9.25925925926,
                  9.25925925926,
                  9.25925925926,
                  9.25925925926,
                  9.25925925926,
                  9.25925925926,
              ],
              gridRowUnit: '%',

              gridColumns: [ 9, 9, 5, 9, 9, ],
              gridColumnsPortraitPhone:
                [ 200, 200, 100, 200, 200, ],
              gridColumnsLandscapePhone:
                [ 200, 200, 100, 200, 200, ],
              gridColumnsPortraitTablet:
                [ 200, 200, 100, 200, 200, ],
              gridColumnsLanscapeTablet:
                [ 200, 200, 1, 200, 200, ], //TODO: fix ui elements
              gridColumnsSmallDesktop:
                [ 200, 200, 1, 200, 200, ],
              gridColumnsMediumDesktop:
                [ 200, 200, 1, 200, 200, ],
              gridColumnsLargeDesktop:
                [ 200, 200, 1, 200, 200, ],

              gridColumnUnit: 'px',
              width: 100,
              height: 70,
              widthUnit: '%',
              heightUnit: '%',
              gridLeftMargin: 2,
              gridLeftMarginUnit: '%',
            }
          }
        }
      }
    }
});

export default Constants
