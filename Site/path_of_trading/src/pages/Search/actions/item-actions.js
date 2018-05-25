import { ADD_MOD } from 'constants/ActionTypes';

export const addMod = needToAddMod => ({
  type: ADD_MOD,
  payload: needToAddMod,
});
