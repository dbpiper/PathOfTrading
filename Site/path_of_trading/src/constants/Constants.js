const Constants = Object.freeze({

    Buttons: {
      Dropdown: {
        paddingTop: 8,
        paddingBottom: 4,
        paddingLeft: 8,
        paddingRight: 8,

        paddingTopUnit: 'px',
        paddingBottomUnit: 'px',
        paddingLeftUnit: 'px',
        paddingRightUnit: 'px',

        width: {
          sizes: [
            40, // Portrait Tablet
            44, // Landscape Tablet
            48, // Portrait Tablet
            52, // Landscape Tablet
            56, // Small Desktop
            60, // Medium Desktop
            64, // Large Desktop
          ],
          unit: 'px'
        },
        height: {
          sizes: [
            28, // Portrait Tablet
            28, // Landscape Tablet
            28, // Portrait Tablet
            28, // Landscape Tablet
            33, // Small Desktop
            43, // Medium Desktop
            53, // Large Desktop
          ],
          unit: 'px'
        },

        borderRadus: 3, //only on top right and bottom right
        borderRadiusUnit: 'px',
      },
      Search: {
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 8,
        paddingRight: 8,

        paddingTopUnit: 'px',
        paddingBottomUnit: 'px',
        paddingLeftUnit: 'px',
        paddingRightUnit: 'px',

        width: {
            sizes: [
              63,
              63,
              63,
              70,
              80,
              90,
              100,
            ],
            unit: 'px',
        },
        height: {
            sizes: [
              38, // Portrait Tablet
              38, // Landscape Tablet
              38, // Portrait Tablet
              38, // Landscape Tablet
              43, // Small Desktop
              53, // Medium Desktop
              63, // Large Desktop
            ],
            unit: 'px',
        },

        borderRadus: 3, //only on top right and bottom right
        borderRadiusUnit: 'px',
      },
    },
    Textbox: {
        height: {
          sizes: [
              28, // Portrait Phone
              28, // Landscape Tablet
              28, // Portrait Tablet
              28, // Landscape Tablet
              33, // Small Desktop
              43, // Medium Desktop
              53, // Large Desktop
          ],
          unit: 'px',
      },
      width: {
          sizes: [
            70, // Portrait Phone
            80, // Landscape Phone
            100, // Portrait Tablet
            120, // Landscape Tablet
            140, // Small Desktop
            160, // Medium Desktop
            180, // Large Desktop
          ],
          rangedSizes: [
            360, // Portrait Phone
            360, // Landscape Phone
            360, // Portrait Tablet
            360, // Landscape Tablet
            360, // Small Desktop
            360, // Medium Desktop
            360, // Large Desktop
          ],
          unit: 'px',
      },
      heightUnit: 'px',
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
      height: {
          sizes: [
            38, // Portrait Tablet
            38, // Landscape Tablet
            38, // Portrait Tablet
            38, // Landscape Tablet
            43, // Small Desktop
            53, // Medium Desktop
            63, // Large Desktop
          ],
          unit: 'px',
      },
      width: {
          sizes: [
            175, // Portrait Tablet
            180, // Landscape Tablet
            190, // Portrait Tablet
            200, // Landscape Tablet
            230, // Small Desktop
            330, // Medium Desktop
            430, // Large Desktop
          ],
          unit: 'px',
      },
      heightUnit: 'px',
      padding: '10',
      paddingUnit: 'px',

      borderRadus: 3,
      borderRadiusUnit: 'px',
    },
    Strings: {
      search: "Search",
      searchPlaceholder: "Enter an Item's Name",
    },
    Colors: {
      buttonPrimary: '#79ADDC',
      buttonPrimaryLight: '#94bde3',
      textboxBackground: '#95A2A8', //'rgba(188, 212, 222, 0.42)',
      standardFont: '#FEFDFF',
      headingFont: '#FEFDFF',
      dropdownSelectedColor: '#304352',
      dropdownSelectedBackground: '#FEFDFF',
      underlineColorHovered: '#D2CFD2',
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
        fontSize: 2,
        fontSizeUnit: 'rem',
      },
      Standard: {
        fontFamily: "'Open Sans', sans-serif",
        fontWeight: 300,
        fontWeightSemiBold: 600,
        fontSizeHeading: 1.25,
        fontSize: 1,
        fontSizeSmall: 0.75,
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
                  35,
                  65,
              ],
              gridRowUnit: '%',

              gridColumns: {
                sizes: {
                  gridColumnsPortraitPhone:
                    [ 235, 30, 100],
                  gridColumnsLandscapePhone:
                    [ 240, 30, 124],
                  gridColumnsPortraitTablet:
                    [ 250, 60, 148],
                  gridColumnsLanscapeTablet:
                    [ 270, 90, 172],
                  gridColumnsSmallDesktop:
                    [ 310, 120, 196],
                  gridColumnsMediumDesktop:
                    [ 420, 150, 220],
                  gridColumnsLargeDesktop:
                    [ 530, 180, 244],
                },
                unit: 'px',
              },

              gridColumnUnit: 'px',
              width: 100,
              height: {
                sizes: [
                  120,
                  120,
                  120,
                  120,
                  130,
                  160,
                  225,
                ],
                unit: 'px',
              },
              widthUnit: '%',
          },
          Body: {
            Combat: {
              gridRows: {
                sizes: [
                  [15, 9.259, 9.259, 9.259, 9.259, 9.259, 9.259],
                  [15, 9.259, 9.259, 9.259, 9.259, 9.259, 9.259],
                  [15, 9.259, 9.259, 9.259, 9.259, 9.259, 9.259],
                  [15, 9.259, 9.259, 9.259, 9.259, 9.259, 9.259],
                  [15, 9.259, 9.259, 9.259, 9.259, 9.259, 9.259],
                  [15, 9.259, 9.259, 9.259, 9.259, 9.259, 9.259],
                  [15, 9.259, 9.259, 9.259, 9.259, 9.259, 9.259],
                ],
                unit: '%',
              },
              gridColumns: {
                sizes: {
                  gridColumnsPortraitPhone:
                    [ 110, 150, 0, 80, 200, ],
                  gridColumnsLandscapePhone:
                    [ 110, 150, 0, 80, 200, ],
                  gridColumnsPortraitTablet:
                    [ 110, 150, 0, 80, 200, ],
                  gridColumnsLanscapeTablet:
                    [ 110, 150, 0, 80, 200, ],
                  gridColumnsSmallDesktop:
                    [ 110, 150, 0, 80, 200, ],
                  gridColumnsMediumDesktop:
                    [ 140, 150, 60, 110, 200, ],
                  gridColumnsLargeDesktop:
                    [ 140, 150, 160, 110, 200, ],

                },
                unit: 'px',
              },

              width: 100,
              height: 70,
              widthUnit: '%',
              heightUnit: '%',
              gridLeftMargin: 2,
              gridLeftMarginUnit: '%',
            },
            Trading: {
              gridRows: {
                sizes: [
                  [55, 55, 55, 55, 55, 55, 55, 55],
                  [55, 55, 55, 55, 55, 55, 55, 55],
                  [55, 55, 55, 55, 55, 55, 55, 55],
                  [55, 55, 55, 55, 55, 55, 55, 55],
                  [57, 57, 57, 57, 57, 57, 57, 57],
                  [65, 65, 65, 65, 65, 65, 65, 65],
                  [80, 80, 80, 80, 80, 80, 80, 80],
                ],
                unit: 'px',
              },
              gridColumns: {
                sizes: {
                  gridColumnsPortraitPhone:
                    [ 120, 140, 0, 95, 65, 15, 140, 200],
                  gridColumnsLandscapePhone:
                    [ 120, 140, 0, 95, 65, 15, 140, 200],
                  gridColumnsPortraitTablet:
                    [ 120, 140, 0, 95, 65, 15, 140, 200],
                  gridColumnsLanscapeTablet:
                    [ 120, 140, 0, 95, 65, 15, 140, 200],
                  gridColumnsSmallDesktop:
                    [ 140, 140, 45, 95, 65, 45, 160, 200],
                  gridColumnsMediumDesktop:
                    [ 140, 140, 60, 105, 65, 60, 160, 200],
                  gridColumnsLargeDesktop:
                    [ 140, 140, 90, 150, 65, 90, 200, 200],
                },
                unit: 'px',
              },

              width: 100,
              height: {
                sizes: [
                  500,
                  500,
                  500,
                  500,
                  500,
                  600,
                  700,
                ],
                unit: 'px',
              },
              widthUnit: '%',
              gridLeftMargin: 2,
              gridLeftMarginUnit: '%',
            },
          }
        }
      }
    }
});

export default Constants
