const HeaderConstants = Object.freeze({
  gridRows: [
      {
        size: 70,
        unit: 'px'
      },
      {
        size: 'calc(100% - 70px)',
        unit: '',
      },
  ],
  gridRowUnit: '%',

  gridColumns: {
    sizes: {
      gridColumnsPortraitPhone:
        [ 100, 100, 235, 30, 100],
      gridColumnsLandscapePhone:
        [ 100, 100, 240, 30, 124],
      gridColumnsPortraitTablet:
        [ 100, 100, 250, 60, 148],
      gridColumnsLanscapeTablet:
        [ 100, 100, 270, 90, 172],
      gridColumnsSmallDesktop:
        [ 100, 150, 310, 120, 196],
      gridColumnsMediumDesktop:
        [ 100, 150, 420, 150, 220],
      gridColumnsLargeDesktop:
        [ 300, 150, 530, 180, 244],
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
});

export default HeaderConstants;
