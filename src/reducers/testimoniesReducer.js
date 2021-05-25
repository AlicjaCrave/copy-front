import { SET_TESTIMONIES, SET_TESTIMONIES_HOMEPAGE } from 'src/actions/testimonies';

const initialState = {
  testimoniesList: [],
  testimoniesListHomePage: [],
};

function testimoniesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_TESTIMONIES:
      return {
        ...state,
        testimoniesList: action.testimoniesArray,
      };

    case SET_TESTIMONIES_HOMEPAGE:
      return {
        ...state,
        testimoniesListHomePage: action.testimoniesHomepageArray,
      };

    default:
      return state;
  }
}

export default testimoniesReducer;
