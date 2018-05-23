import {
  START_OPEN_MENU,
  FINISH_OPEN_MENU,
  START_CLOSE_MENU,
  FINISH_CLOSE_MENU,
}
from 'constants/ActionTypes';

const inititalState = {
  startedMenuOpen: true,
  finishedMenuOpen: false,
  startedMenuClose: false,
  finishedMenuClose: false,
};

const menuReducer = (state = inititalState, action) => {
  switch (action.type) {
    case START_OPEN_MENU:
      return { ...state, startedMenuOpen: action.payload, finishedMenuClose: false };
    case FINISH_OPEN_MENU:
      return { ...state, finishedMenuOpen: action.payload, startedMenuOpen: false, };
    case START_CLOSE_MENU:
      return { ...state, startedMenuClose: action.payload, finishedMenuOpen: false, };
    case FINISH_CLOSE_MENU:
      return { ...state, finishedMenuClose: action.payload, startedMenuClose: false, };
    default:
      return state;
  }
};

export default menuReducer;
