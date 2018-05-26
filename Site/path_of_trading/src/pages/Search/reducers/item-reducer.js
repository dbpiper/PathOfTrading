import { ADD_MOD, REMOVE_MOD } from 'constants/ActionTypes';

const inititalState = {
  needToAddMod: false,
};

const itemReducer = (state = inititalState, action) => {
  switch (action.type) {
    case ADD_MOD:
      return {...state, needToAddMod: action.payload };
    case REMOVE_MOD:
      return {...state, removedMod: action.payload };
    default:
      return state;
  }
};

export default itemReducer;
