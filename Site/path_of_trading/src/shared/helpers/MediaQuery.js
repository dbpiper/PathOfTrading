import Constants from 'constants/Constants';


/*

MediaQuery shall be used in the following manner:

  The user calls MediaQuery.create to generate media queries,
  the argument to create is a mediaQueryRecipes array which
  is made up of media query recipes each of which is an
  object with the following properties:
    * property - the css property that the recipe is used to make
    * function - the MediaQuery function or user provided one which provides
                 a suitable CSS attribute to be used for the media queries,
                 which is called to make the recipe
    * args - the args for ALL the media features for that recipe like {sizes: [[400, 150], [300, 100]], unit: 'px',}
             for the args for column widths for example, each of which corresponds to a media query feature

    * getMediaFeatureArgs - the function provided by the user which maps the args for the recipe to the args
                            for the specific media feature.

                            The signature for this function should match the following
                              (args, index) -> argsForFeature
                            Where argsForFeature must match whichever args each MediaQuery function expects.

                  NOTE: the args will be evaluated in the same order as that of the features in Constants.Layout.MediaQuery

                            Therefore, the index will be provided in that order, however this does not mean that
                            the user function must match this order for its args, only that the index will be GIVEN
                            in this order, thus the args array could be in a completely different order, as long as the

                            getMediaFeatureArgs function includes a mapping from the index to the user array index.

                            The simplest, and likely easiest to use and read, of such mappings is the identity function,
                            that is: f(x) = x. But, there may be some cases where a different mapping may be desired.



  The following is an example of using MediaQuery, which follows all of the instructions
  given above for its use, but is provided to illuminate the situation in a way which
  descriptions alone may be inadequate for.


  const gridRowMediaQueries = MediaQuery.create([
    {
      property: 'grid-template-columns',
      function: MediaQuery.gridColumnArrayToSizes,
      args: {
        sizes: Object.values(Constants.Layout.Page.Search.Header.gridColumns.sizes),
        unit: Constants.Layout.Page.Search.Header.gridColumnUnit,
      },
      recipeArgsGetter: (args, index) => {
        return {
          sizes: args.sizes[index],
          unit: args.unit,
        };
      },
    },
  ]);


*/

class MediaQuery {

  static gridColumnArrayToSizes(argsObject) {
    const sizes = argsObject.sizes;
    const unit = argsObject.unit;

    if (sizes.length > 0 && !(Array.isArray(sizes) && Number.isFinite(sizes[0]))) {
        console.log('Error: Invalid Args to gridColumnNumToSizes!'); // only reached upon user (of MediaQuery) error
        return '';
   } else {
      return sizes.map(size => {
        return size + unit;
      }).reduce((acc, value) => {
        return acc + ' ' + value;
      });
   }
  };



  static create(mediaQueryRecipes) {

      // "private" function of create
      function getMediaHeader(label) {
        switch(label) {
          case Constants.Layout.MediaQuery.LargeDesktop:
            return '@media only screen and (min-width: 1601px) {';
          case Constants.Layout.MediaQuery.MediumDesktop:
            return '@media only screen and (min-width: 1201px) and (max-width: 1600px) {'
          case Constants.Layout.MediaQuery.SmallDesktop:
            return '@media only screen and (min-width: 980px) and (max-width: 1200px) {'
          case Constants.Layout.MediaQuery.LandscapeTablet:
            return '@media only screen and (min-width: 768px) and (max-width: 979px) {'
          case Constants.Layout.MediaQuery.PortraitTablet:
            return '@media only screen and (min-width: 481px) and (max-width: 767px) {'
          case Constants.Layout.MediaQuery.LandscapePhone:
            return '@media only screen and (min-width: 321px) and (max-width: 480px) {'
          case Constants.Layout.MediaQuery.PortraitPhone:
            return '@media only screen and (max-width: 320px) {'
          default:
            return '';
        }
      }


      return Object.values(Constants.Layout.MediaQuery).map(label => {

        const mediaQueryHeader = getMediaHeader(label);

        const mediaQueryBody = mediaQueryRecipes.map(recipe => {
            return recipe.property + ':'
              + recipe.function(recipe.recipeArgsGetter(recipe.args, label))
              + ';';
        }).reduce((acc, property) => {
            return acc + property;
        });

        const mediaQueryFooter = ' } '

        return mediaQueryHeader + mediaQueryBody + mediaQueryFooter;
      }).reduce((acc, query) => {
        return acc + query;
      });
  }
}

/*
  This code is here for historical purposes, and will eventually be removed,
  its purpose for the moment is to illustrate the value of abstraction and
  functional programming. Its functionality was implemented abstractly
  using functional programming in about 50% of the lines of code
  in addition, its use has been reduced to about 15 lines of code for the
  user of the create function. And the amount of work needed to add
  new media queries has similarily been dramatically reduced from a massive
  amount of copy and paste, followed by at least 30 minutes of editing to
  fit the specific use case, all of which resulted in a waste of developer
  time (as well as lowered moral and psychological fitness).

  The old approach also made the code very brittle and difficult to change,
  due to the aforementioned issues.

// const gridColumn = (colNum, screenSize) => {
//   switch(screenSize) {
//     case Constants.Layout.MediaQuery.PortraitPhone:
//       return Constants.Layout.Page.Search.Header.gridColumnsPortraitPhone[colNum] +
//         Constants.Layout.Page.Search.Header.gridColumnUnit;
//
//     case Constants.Layout.MediaQuery.LandscapePhone:
//       return Constants.Layout.Page.Search.Header.gridColumnsLandscapePhone[colNum] +
//         Constants.Layout.Page.Search.Header.gridColumnUnit;
//
//     case Constants.Layout.MediaQuery.PortraitTablet:
//       return Constants.Layout.Page.Search.Header.gridColumnsPortraitTablet[colNum] +
//         Constants.Layout.Page.Search.Header.gridColumnUnit;
//
//     case Constants.Layout.MediaQuery.LandscapeTablet:
//       return Constants.Layout.Page.Search.Header.gridColumnsLanscapeTablet[colNum] +
//         Constants.Layout.Page.Search.Header.gridColumnUnit;
//
//     case Constants.Layout.MediaQuery.SmallDesktop:
//       return Constants.Layout.Page.Search.Header.gridColumnsSmallDesktop[colNum] +
//         Constants.Layout.Page.Search.Header.gridColumnUnit;
//
//     case Constants.Layout.MediaQuery.MediumDesktop:
//       return Constants.Layout.Page.Search.Header.gridColumnsMediumDesktop[colNum] +
//         Constants.Layout.Page.Search.Header.gridColumnUnit;
//
//     case Constants.Layout.MediaQuery.LargeDesktop:
//       return Constants.Layout.Page.Search.Header.gridColumnsLargeDesktop[colNum] +
//         Constants.Layout.Page.Search.Header.gridColumnUnit;
//
//     default:
//     return '10000px';
//       // return Constants.Layout.Page.Search.Header.gridColumns[colNum] +
//       //   Constants.Layout.Page.Search.Header.gridColumnUnit;
//   }
// };
//
//  /* Large Desktops */
//   @media only screen
//   and (min-width: 1601px) {
//
//     grid-template-columns:
//     ${gridColumn(0, Constants.Layout.MediaQuery.LargeDesktop)}
//     ${gridColumn(1, Constants.Layout.MediaQuery.LargeDesktop)}
//   }
//
//
//
//   /* Large Laptops / Medium Desktops */
//   @media only screen
//     and (min-width: 1201px)
//     and (max-width: 1600px)
//     {
//
//     grid-template-columns:
//     ${gridColumn(0, Constants.Layout.MediaQuery.MediumDesktop)}
//     ${gridColumn(1, Constants.Layout.MediaQuery.MediumDesktop)}
//   }
//
//   /* Small Desktop/Laptop */
//   @media only screen
//     and (min-width: 980px)
//     and (max-width: 1200px)
//     {
//
//     grid-template-columns:
//     ${gridColumn(0, Constants.Layout.MediaQuery.SmallDesktop)}
//     ${gridColumn(1, Constants.Layout.MediaQuery.SmallDesktop)}
//   }
//
//   /* Landscape Tablet */
//   @media only screen
//   and (min-width: 768px)
//   and (max-width: 979px) {
//
//     grid-template-columns:
//     ${gridColumn(0, Constants.Layout.MediaQuery.LandscapeTablet)}
//     ${gridColumn(1, Constants.Layout.MediaQuery.LandscapeTablet)}
//   }
//
//   /*  Portrait Tablet */
//   @media only screen
//   and (max-width: 767px)
//   and (min-width: 481px) {
//
//     grid-template-columns:
//     ${gridColumn(0, Constants.Layout.MediaQuery.PortraitTablet)}
//     ${gridColumn(1, Constants.Layout.MediaQuery.PortraitTablet)}
//   }
//
//   /* Landscape phones */
//   @media only screen
//     and (max-width: 480px)
//     and (min-width: 321px) {
//
//     grid-template-columns:
//     ${gridColumn(0, Constants.Layout.MediaQuery.LandscapePhone)}
//     ${gridColumn(1, Constants.Layout.MediaQuery.LandscapePhone)}
//   }
//
//   /* Portrait phones */
//   @media only screen
//   and (max-width: 320px) {
//     grid-template-columns:
//     ${gridColumn(0, Constants.Layout.MediaQuery.PortraitPhone)}
//     ${gridColumn(1, Constants.Layout.MediaQuery.PortraitPhone)}
//   }


export default MediaQuery;
