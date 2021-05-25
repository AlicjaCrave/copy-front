export const UPDATE_USER_FIELD = 'UPDATE_USER_FIELD';
export const LOG_IN = 'LOG_IN';
export const SAVE_USER = 'SAVE_USER';
export const UPDATE_USER_FIELD_INSCRIPTION = 'UPDATE_USER_FIELD_INSCRIPTION';
export const UPDATE_USER_NEW_PASSWORD = 'UPDATE_USER_NEW_PASSWORD';
export const NEW_INSCRIPTION = 'NEW_INSCRIPTION';
export const LOG_OUT = 'LOG_OUT'
export const MESSAGE_CONNECTED = 'MESSAGE_CONNECTED'

// un chargement (payload) avec 2 info
export const updateUserField = (newValue, name) => ({
  type: UPDATE_USER_FIELD,
  newValue,
  name,
});

export const logIn = () => ({
  type: LOG_IN,
});

export const updateUserNewPassword = (data) => ({
  type: UPDATE_USER_NEW_PASSWORD,
  data,
});

export const updateUserFieldInscription = (data) => ({
  type: UPDATE_USER_FIELD_INSCRIPTION,
  data,
});

export const newInscription = () => ({
  type: NEW_INSCRIPTION,
});

export const messageConnected = (data) => ({
  type: MESSAGE_CONNECTED,
  data,
});

export const saveUser = (isLogged, token, id, success, message) => ({
  type: SAVE_USER,
  isLogged,
  token,
  id,
  success,
  message,
});
export const logOut = () => ({
  type: LOG_OUT,
});
