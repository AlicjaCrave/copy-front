export const LOAD_RESOLUTIONS = 'LOAD_RESOLUTIONS';
export const LOAD_RESOLUTIONS_CONNECTED = 'LOAD_RESOLUTIONS_CONNECTED';
export const SET_RESOLUTIONS = 'SET_RESOLUTIONS';
export const UPDATE_SELECT_RESOLUTION = 'UPDATE_SELECT_RESOLUTION';
export const ADD_RESOLUTION = 'ADD_RESOLUTION';
export const NEW_RESOLUTION = 'NEW_RESOLUTION';

export const loadResolutions = () => ({
  type: LOAD_RESOLUTIONS,
});

export const loadResolutionsConnected = () => ({
  type: LOAD_RESOLUTIONS_CONNECTED,
});

export const setResolutions = (resolutionsArray) => ({
  type: SET_RESOLUTIONS,
  resolutionsArray,
});

export const updateSelectResolution = (newIdResolution, nameResolution) => ({
  type: UPDATE_SELECT_RESOLUTION,
  newIdResolution,
  nameResolution,
});

export const addResolution = () => ({
  type: ADD_RESOLUTION,
});

export const newResolution = () => ({
  type: NEW_RESOLUTION,
});
