import { SELECT_TAB } from 'constants/ActionTypes';

export const selectTab = selectedTab => ({
  type: SELECT_TAB,
  payload: selectedTab,
});
