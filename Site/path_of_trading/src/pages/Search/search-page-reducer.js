import { combineReducers } from 'redux';

import tabReducer from './reducers/tab-reducer';
import menuReducer from './reducers/menu-reducer';

const searchPageReducer = combineReducers({
  menu: menuReducer,
  tab: tabReducer,
});

export default searchPageReducer;
