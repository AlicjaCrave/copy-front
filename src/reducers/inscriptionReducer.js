import { UPDATE_USER_FIELD_INSCRIPTION } from 'src/actions/auth';

const initialState = {
  username: '',
  password: '',
  confirmPassword: '',
  email: '',
};

function inscriptionReducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_USER_FIELD_INSCRIPTION:
      return {
        ...state,
        // récupert la valeur dans cette variable [action.name] et utilise ca comme propriété pour ciblé
        username: action.data.username,
        password: action.data.password,
        confirmPassword: action.data.confirmPassword,
        email: action.data.email,
      };
    default:
      return state;
  }
}

export default inscriptionReducer;