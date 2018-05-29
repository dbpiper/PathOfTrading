import {
  ADD_MOD,
  REMOVE_MOD,
}
from 'constants/ActionTypes';

export const addMod = needToAddMod => ({
  type: ADD_MOD,
  payload: needToAddMod,
});

export const removeMod = removedMod => ({
  type: REMOVE_MOD,
  payload: removedMod,
});
