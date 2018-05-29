import tradeAPI from './api/trade-api';

const cleanUpData = tradeData => {
  // tradeData.map(array => array.filter(item => item.public));
  return tradeData.filter(item => item.public);
};

const resolvers = {
  Query: {
    stashes: () => {
      return tradeAPI.getStashes().then(tradeData => {
        const cleanedTradeData = cleanUpData(tradeData.data.stashes);
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
