import { combineReducers } from 'redux';

import searchPageReducer from 'pages/Search/search-page-reducer';
import resultsPageReducer from 'pages/Results/results-page-reducer';


const rootReducer = combineReducers({
  searchPage: searchPageReducer,
  resultsPage: resultsPageReducer,
});

export default rootReducer;
