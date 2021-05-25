import { LOG_OUT } from '../actions/auth';
import {
  SET_INITIAL_USER_CHECK_DAY,
  UPDATE_STATUS_DAY,
  UPDATE_TO_CHECK_USER_DAY,
  SET_DAY_AND_STATUS_USER,
  UPDATE_ID_OF_RESOLUTION_TO_CHECK,
  CHANGE_STATUS_RESOLUTION,
  UPDATE_ID_OF_RESOLUTION_TO_ARCHIVE,
} from '../actions/checkDays';

const initialState = {
  day: '',
  statusDay: '',
  resolution: '',
  resolutionToArchive: '',
  resolutions: [],
  resolutionid: '',
  status: '',
  duration: [],
};

function checkDaysReducer(state = initialState, action = {}) {
  const newState = { ...state };
  switch (action.type) {
    case SET_INITIAL_USER_CHECK_DAY:
      return {
        ...newState,
        resolutions: action.resolutions,
        resolutionid: action.resolution_id,
        status: action.status,
        duration: action.duration,
      };
    case UPDATE_TO_CHECK_USER_DAY:
      return {
        ...newState,
        [action.nameOfDayToChange]: action.idToChangeDay,
      };
    case UPDATE_STATUS_DAY:
      return {
        ...newState,
        [action.statusValue]: action.nameStatus,
      };
    case UPDATE_ID_OF_RESOLUTION_TO_CHECK:
      return {
        ...newState,
        [action.nameIdOfResolution]: action.idOfResolution,
      };
    case SET_DAY_AND_STATUS_USER: {
      const selectedRes = state.resolutions.find((item) => item.resolution_id === state.resolution);
      const selectedDur = selectedRes.duration.filter((item) => item.day !== state.day);
      const newRes = { ...selectedRes, duration: selectedDur };
      newRes.duration.push({
        day: state.day,
        status: state.statusDay,
      });
      newRes.duration.sort((a, b) => a.day - b.day);
      newRes.status = (newRes.duration.filter((dur) => dur.status == 0).length > 0) ? 0 : 1;
      const otherRes = state.resolutions.filter((item) => item.resolution_id !== state.resolution);
      return {
        ...newState,
        resolutions: otherRes.concat(newRes),
      };
    }
    case UPDATE_ID_OF_RESOLUTION_TO_ARCHIVE:
      return {
        ...newState,
        [action.nameIdOfResolution]: action.idOfResolution,
      };
    /*
  case CHANGE_STATUS_RESOLUTION:
    const selectedResToArchive = state.resolutions.find((item) => item.resolution_id === state.resolution);

    //const newResToArchive = newRes.status == 1 ? 2 : 1;
    return {
      ...newState,
      resolution: newResToArchive,
    };
    */
    case LOG_OUT:
      return {
        ...newState,
        day: '',
        statusDay: '',
        resolution: '',
        resolutionToArchive: '',
        resolutions: [],
        resolutionid: '',
        status: '',
        duration: [],
      };
    default:
      return state;
  }
}

export default checkDaysReducer;
