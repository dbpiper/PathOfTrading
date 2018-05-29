import { LOAD_TRADE_DATA_SUCCESS } from '../constants/ActionTypes';

const inititalState = {
  tradeData: [],
};

const  tradeAPIReducer = (state = inititalState, action) => {
  switch (action.type) {
    case LOAD_TRADE_DATA_SUCCESS:
      return {...state, tradeData: action.payload };
    default:
      return state;
  }
};

export default tradeAPIReducer;
