export const LOAD_USER_RESOLUTIONS = 'LOAD_USER_RESOLUTIONS';
export const SET_USER_RESOLUTIONS = 'SET_USER_RESOLUTIONS';
export const DELETE_USER_RESOLUTION = 'DELETE_USER_RESOLUTION';
export const UPDATE_SELECT_TO_DEL_RESOLUTION = 'UPDATE_SELECT_TO_DEL_RESOLUTION';
export const SET_DEL_RESOLUTION = 'SET_DEL_RESOLUTION';
export const LOAD_USER_ARCHIVED_RESOLUTIONS = 'LOAD_USER_ARCHIVED_RESOLUTIONS';
export const SET_USER_ARCHIVED_RESOLUTIONS = 'SET_USER_ARCHIVED_RESOLUTIONS';

export const loadUserResolutions = () => ({
  type: LOAD_USER_RESOLUTIONS,
});

export const setUserResolutions = (resolutionsUserArray) => ({
  type: SET_USER_RESOLUTIONS,
  resolutionsUserArray,
});

export const updateSelectToDelResolution = (idToDelResolution, nameToDelResolution, durationArray) => ({
  type: UPDATE_SELECT_TO_DEL_RESOLUTION,
  idToDelResolution,
  nameToDelResolution,
  durationArray,
});

export const SetDelResolution = () => ({
  type: SET_DEL_RESOLUTION,
});

export const deleteUserResolution = () => ({
  type: DELETE_USER_RESOLUTION,
});

export const loadUserArchivedResolutions = () => ({
  type: LOAD_USER_ARCHIVED_RESOLUTIONS,
});

export const setUserArchivedResolutions = (archivedResolutionsUserArray) => ({
  type: SET_USER_ARCHIVED_RESOLUTIONS,
  archivedResolutionsUserArray,
});