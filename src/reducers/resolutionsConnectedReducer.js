import { SET_RESOLUTIONS } from 'src/actions/resolutions';
import { UPDATE_SELECT_TO_DEL_RESOLUTION, SET_USER_ARCHIVED_RESOLUTIONS } from '../actions/resolutionUser';
import { LOG_OUT } from '../actions/auth';

const initialState = {
  resolutions: [],
  resolutionToDel: '',
  duration: [],
  archived: [],
};

function resolutionsConnectedReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_RESOLUTIONS:
      return {
        ...state,
        resolutions: action.resolutionsArray,
      };
    case UPDATE_SELECT_TO_DEL_RESOLUTION:
      return {
        ...state,
        [action.nameToDelResolution]: action.idToDelResolution,
        duration: action.durationArray,
      };
    case LOG_OUT:
      return {
        ...state,
        resolutions: [],
      };
    case SET_USER_ARCHIVED_RESOLUTIONS:
      return {
        ...state,
        archived: action.archivedResolutionsUserArray,
      };
    default:
      return state;
  }
}

export default resolutionsConnectedReducer;
