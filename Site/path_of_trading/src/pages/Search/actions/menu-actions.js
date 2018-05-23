import { OPEN_MENU } from 'constants/ActionTypes';

export const openMenu = menuOpen => ({
  type: OPEN_MENU,
  payload: menuOpen,
});
