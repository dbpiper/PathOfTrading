import { combineReducers } from 'redux';

import tabReducer from './reducers/tab-reducer';

const searchPageReducer = combineReducers({
  tab: tabReducer,
});

export default searchPageReducer;
