import { UPDATE_USER_FIELD, SAVE_USER, LOG_OUT } from 'src/actions/auth';

const initialState = {
  username: '',
  password: '',
  isLogged: false,
  token: null,
  id: '',
  success: true,
  message: '',
};

function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_USER_FIELD:
      return {
        ...state,
        // récupert la valeur dans cette variable [action.name] et utilise ca comme propriété pour ciblé
        [action.name]: action.newValue,
      };
    case SAVE_USER:
      return {
        ...state,
        isLogged: action.isLogged,
        token: action.token,
        password: '',
        id: action.id,
        success: action.success,
        message: action.message,

      };
    case LOG_OUT:
      return {
        ...state,
        isLogged: false,
        token: null,
        success: true,
        message: '',
      };
    default:
      return state;
  }
}

export default authReducer;
