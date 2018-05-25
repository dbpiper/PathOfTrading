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
    }
});

export default Constants
