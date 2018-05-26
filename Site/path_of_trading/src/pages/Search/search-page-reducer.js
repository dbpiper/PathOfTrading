import { combineReducers } from 'redux';

import tabReducer from './reducers/tab-reducer';
import menuReducer from './reducers/menu-reducer';
import itemReducer from './reducers/item-reducer';

const searchPageReducer = combineReducers({
  menu: menuReducer,
  tab: tabReducer,
  item: itemReducer,
});

export default searchPageReducer;
