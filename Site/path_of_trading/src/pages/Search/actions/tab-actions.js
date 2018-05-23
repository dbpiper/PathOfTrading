import { SELECT_TAB } from 'constants/action-types';

export const selectTab = selectedTab => ({
  type: SELECT_TAB,
  payload: selectedTab,
});
