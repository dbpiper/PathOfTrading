import {
  START_OPEN_MENU,
  FINISH_OPEN_MENU,
  START_CLOSE_MENU,
  FINISH_CLOSE_MENU,
}
from 'constants/ActionTypes';

export const startMenuOpen = startedMenuOpen => ({
  type: START_OPEN_MENU,
  payload: startedMenuOpen,
});

export const finishMenuOpen = finishedMenuOpen => ({
  type: FINISH_OPEN_MENU,
  payload: finishedMenuOpen,
});

export const startMenuClose = startedMenuClose => ({
  type: START_CLOSE_MENU,
  payload: startedMenuClose,
});

export const finishMenuClose = finishedMenuClose => ({
  type: FINISH_CLOSE_MENU,
  payload: finishedMenuClose,
});
