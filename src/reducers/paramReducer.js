import { UPDATE_USER_FIELD_PARAM } from 'src/actions/motivated';
import { LOG_OUT, UPDATE_USER_NEW_PASSWORD } from '../actions/auth';

const initialState = {
  newPassword: '',
  confirmNewPassword: '',

};

function paramReducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_USER_NEW_PASSWORD:
      return {
        ...state,
        newPassword: action.data.newPassword,
        confirmNewPassword: action.data.confirmNewPassword,
      }
    case UPDATE_USER_FIELD_PARAM:
      return {
        ...state,
        [action.nameParam]: action.newValueParam,
      };
    case LOG_OUT:
      return {
        ...state,
        newPassword: '',
        confirmNewPassword: '',
      }
    default:
      return state;
  }
}

export default paramReducer;
