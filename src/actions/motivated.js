export const LOAD_MOTIVATED = 'LOAD_MOTIVATED';
export const SET_MOTIVATED = 'SET_MOTIVATED';
export const UPDATE_USER_FIELD_PARAM = 'UPDATE_USER_FIELD_PARAM';
export const NEW_PASSWORD = 'NEW_PASSWORD';
export const SAVE_PASSWORD = 'SAVE_PASSWORD';

export const loadMotivated = () => ({
  type: LOAD_MOTIVATED,
});

export const setMotivated = (motivatedArray) => ({
  type: SET_MOTIVATED,
  motivatedArray,
});

/* CHANGE THE PASSWORD IN THE PARAMETERS PAGE OF THE USER WHEN CONNECTED */
export const updateUserFieldParam = (newValueParam, nameParam) => ({
  type: UPDATE_USER_FIELD_PARAM,
  newValueParam,
  nameParam,
});

export const newPassword = () => ({
  type: NEW_PASSWORD,
});

export const savePassword = () => ({
  type: SAVE_PASSWORD,
});
