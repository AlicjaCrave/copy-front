import { UPDATE_SELECT_RESOLUTION } from 'src/actions/resolutions';

const initialState = {
  resolutionid: '',
};

function addResolutionReducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_SELECT_RESOLUTION:
      return {
        ...state,
        // récupert la valeur dans cette variable [action.id] et utilise ca comme propriété pour ciblé
        [action.nameResolution]: action.newIdResolution,
      };
    default:
      return state;
  }
}

export default addResolutionReducer;