import { ADD_MOD } from 'constants/ActionTypes';

const inititalState = {
  needToAddMod: false,
};

const tabReducer = (state = inititalState, action) => {
  switch (action.type) {
    case ADD_MOD:
      return {...state, needToAddMod: action.payload };
    default:
      return state;
  }
};

export default tabReducer;
