import { ADD_ARTICLE } from '../constants/action-types';

const inititalState = {
  articles: [],
};

const rootReducer = (state = inititalState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return {...state, articles: [...state.articles, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;
