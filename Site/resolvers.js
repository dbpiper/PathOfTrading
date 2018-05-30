import tradeAPI from './api/trade-api';

const cleanUpData = tradeData => {
  // tradeData.map(array => array.filter(item => item.public));
  return tradeData.filter(item => item.public);
};

const resolvers = {
  Query: {
    stashes: (a, b, c, { cacheControl }) => {
      console.log("we're fetching again...");
      return tradeAPI.getStashes().then(tradeData => {
        const cleanedTradeData = cleanUpData(tradeData.data.stashes);
        cacheControl.setCacheHint({ maxAge: 50 });
        return cleanedTradeData;
      })
      .catch(error => {
        console.log(error);
        throw(error);
      });
    }
    // allCourses: () => {
    //   return courseData;
    // },
    // course: (root, { id }) => {
    //   return courseData.filter(course => course.id === id)[0];
    // }
  }
};

export default resolvers;
