import { SET_INITIAL_USER_CHECK_DAY_TO_SHOW } from '../actions/checkDays';

const initialState = {
  resolutions: [],
};

function showChecksDaysReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_INITIAL_USER_CHECK_DAY_TO_SHOW:
      return {
        ...state,
        resolutions: action.resolutionsA,
      };
    default:
      return state;
  }
}

export default showChecksDaysReducer;

