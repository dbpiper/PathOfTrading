import { combineReducers } from 'redux';

import searchPageReducer from 'pages/Search/search-page-reducer';

const rootReducer = combineReducers({
  searchPage: searchPageReducer,
});

export default rootReducer;
