export const SET_TESTIMONY_TO_SEND = 'SET_TESTIMONY_TO_SEND';
export const UPDATE_ID_OF_RESOLUTION_TO_TESTIMONY = 'UPDATE_ID_OF_RESOLUTION_TO_TESTIMONY';
export const CHANGE_RATE_TESTIMONY = 'CHANGE_RATE_TESTIMONY';
export const UPDATE_TESTIMONY_TEXT = 'UPDATE_TESTIMONY_TEXT';
export const SEND_TESTIMONY = 'SEND_TESTIMONY';

export const setTestimonyToSend = () => ({
  type: SET_TESTIMONY_TO_SEND,
});

export const updateIdOfResolutionToTestimony = (
  idOfResolution,
  nameIdOfResolutionTestimony,
  statusOfResolutionTestimony,
) => ({
  type: UPDATE_ID_OF_RESOLUTION_TO_TESTIMONY,
  idOfResolution,
  nameIdOfResolutionTestimony,
  statusOfResolutionTestimony,
});

export const changeRateTestimony = (value) => ({
  type: CHANGE_RATE_TESTIMONY,
  value,
});

export const updateTestimonyText = (testimonyToSend, nameTestimonyToSend) => ({
  type: UPDATE_TESTIMONY_TEXT,
  testimonyToSend,
  nameTestimonyToSend,
});

export const sendTestimony = () => ({
  type: SEND_TESTIMONY,
});
