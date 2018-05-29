import { SELECT_TAB } from 'constants/ActionTypes';

const inititalState = {
  selectedTab: 'Item',
};

const tabReducer = (state = inititalState, action) => {
  switch (action.type) {
    case SELECT_TAB:
      return {...state, selectedTab: action.payload };
    default:
      return state;
  }
};

export default tabReducer;
