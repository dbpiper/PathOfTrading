import { combineReducers } from 'redux';

import tradeAPIReducer from './reducers/trade-api-reducer';

const resultsPageReducer = combineReducers({
  tradeAPI: tradeAPIReducer,
});

export default resultsPageReducer;
