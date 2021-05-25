import { LOG_OUT } from "../actions/auth";
import {
  CHANGE_RATE_TESTIMONY,
  UPDATE_ID_OF_RESOLUTION_TO_TESTIMONY,
  UPDATE_TESTIMONY_TEXT
} from "../actions/testimonyToSend";


const initialState = {
  resolutionId: '',
  status: '',
  rate: 0,
  testimony: '',
  title: 'Témoignage',
};

function testimonyToSendReducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_ID_OF_RESOLUTION_TO_TESTIMONY:
      return {
        ...state,
        [action.nameIdOfResolutionTestimony]: action.idOfResolution,
        status: action.statusOfResolutionTestimony,
      };
    case CHANGE_RATE_TESTIMONY:
      return {
        ...state,
        rate: action.value,
      };
    case UPDATE_TESTIMONY_TEXT:
      return {
        ...state,
        [action.nameTestimonyToSend]: action.testimonyToSend,
      };
    case LOG_OUT:
      return {
        ...state,
        resolutionId: '',
        status: '',
        rate: 0,
        testimony: '',
        title: 'Témoignage',
      };
    default:
      return state;
  }
}

export default testimonyToSendReducer;
