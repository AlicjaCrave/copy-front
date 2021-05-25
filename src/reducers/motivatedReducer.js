import { SET_MOTIVATED } from 'src/actions/motivated';

const initialState = {
  motivatedList: [],
};

function motivatedReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_MOTIVATED:
      return {
        ...state,
        motivatedList: action.motivatedArray,
      };
    default:
      return state;
  }
}

export default motivatedReducer;
