import { combineReducers } from 'redux';
import { apolloReducer } from 'apollo-cache-redux';

import searchPageReducer from 'pages/Search/search-page-reducer';
import resultsPageReducer from 'pages/Results/results-page-reducer';

const rootReducer = combineReducers({
  searchPage: searchPageReducer,
  resultsPage: resultsPageReducer,
  apollo: apolloReducer,
});

export default rootReducer;
