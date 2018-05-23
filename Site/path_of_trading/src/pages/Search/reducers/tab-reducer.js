import { SELECT_TAB } from 'constants/action-types';

const inititalState = {
  selectedTab: 'Combat',
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
