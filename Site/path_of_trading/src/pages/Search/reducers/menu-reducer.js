import { OPEN_MENU } from 'constants/ActionTypes';

const inititalState = {
  menuOpen: true,
};

const menuReducer = (state = inititalState, action) => {
  switch (action.type) {
    case OPEN_MENU:
      return {...state, menuOpen: action.payload };
    default:
      return state;
  }
};

export default menuReducer;
