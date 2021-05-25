export const UPDATE_TO_CHECK_USER_DAY = 'UPDATE_TO_CHECK_USER_DAY';
export const UPDATE_STATUS_DAY = 'UPDATE_STATUS_DAY';
export const UPDATE_ID_OF_RESOLUTION_TO_CHECK = 'UPDATE_ID_OF_RESOLUTION_TO_CHECK';
export const SET_INITIAL_USER_CHECK_DAY = 'SET_INITIAL_USER_CHECK_DAY';
export const SET_DAY_AND_STATUS_USER = 'SET_DAY_AND_STATUS_USER';
export const SET_INITIAL_USER_CHECK_DAY_TO_SHOW = 'SET_INITIAL_USER_CHECK_DAY_TO_SHOW';
export const SEND_CHECK_DAYS = 'SEND_CHECK_DAYS';

export const UPDATE_ID_OF_RESOLUTION_TO_ARCHIVE = 'UPDATE_ID_OF_RESOLUTION_TO_ARCHIVE';
export const CHANGE_STATUS_RESOLUTION = 'CHANGE_STATUS_RESOLUTION';

//export const SEND_STATUS_RESOLUTION = 'SEND_STATUS_RESOLUTION';


export const setInitialUserCheckDay = (resolutions, resolution_id, status, duration) => ({
  type: SET_INITIAL_USER_CHECK_DAY,
  resolutions,
  resolution_id,
  status,
  duration,
});

export const updateStatusDay = (nameStatus, statusValue, statusId) => ({
  type: UPDATE_STATUS_DAY,
  nameStatus,
  statusValue,
  statusId,
});

export const updateToCheckUserDay = (idToChangeDay, nameOfDayToChange, stateOfTheCheck) => ({
  type: UPDATE_TO_CHECK_USER_DAY,
  idToChangeDay,
  nameOfDayToChange,
  stateOfTheCheck,
});
export const updateIdOfResolutionToCheck = (idOfResolution, nameIdOfResolution) => ({
  type: UPDATE_ID_OF_RESOLUTION_TO_CHECK,
  idOfResolution,
  nameIdOfResolution,
});
// ---------to join day and user duration in good place of the state before send
export const setDayAndStatusUser = () => ({
  type: SET_DAY_AND_STATUS_USER,
});

export const setInitialUserCheckDayToShow = (resolutionsA) => ({
  type: SET_INITIAL_USER_CHECK_DAY_TO_SHOW,
  resolutionsA,
});

export const sendCheckDays = () => ({
  type: SEND_CHECK_DAYS,
});


export const updateIdOfResolutionToArchive = (idOfResolution, nameIdOfResolution) => ({
  type: UPDATE_ID_OF_RESOLUTION_TO_ARCHIVE,
  idOfResolution,
  nameIdOfResolution,
})
export const changeStatusResolution = (resolution) => ({
  type: CHANGE_STATUS_RESOLUTION,
  resolution,
});

/* export const sendStatusResolution = (resolution) => ({
  type: SEND_STATUS_RESOLUTION,
  resolution,
});
 */

