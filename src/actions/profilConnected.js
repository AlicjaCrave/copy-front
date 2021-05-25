export const LOAD_PROFIL = 'LOAD_PROFIL';
export const LOAD_PROFIL_CONNECTED = 'LOAD_PROFIL_CONNECTED';
export const SET_PROFIL = 'SET_PROFIL';
export const UPDATE_NEW_AVATAR_SELECTED = 'UPDATE_NEW_AVATAR_SELECTED';
export const UPDATE_NEW_BACKGROUND_SELECTED = 'UPDATE_NEW_BACKGROUND_SELECTED';
export const UPDATE_NEW_CITY_SELECTED = 'UPDATE_NEW_CITY_SELECTED';
export const SEND_NEW_AVATAR = 'SEND_NEW_AVATAR';
export const SEND_NEW_BACKGROUND = 'SEND_NEW_BACKGROUND';
export const SEND_NEW_CITY = 'SEND_NEW_CITY';

export const loadProfil = () => ({
  type: LOAD_PROFIL,
});

export const loadProfilConnected = () => ({
  type: LOAD_PROFIL_CONNECTED,
});

export const updateNewCitySelected = (valueCity, nameOfCityToSet) => ({
  type: UPDATE_NEW_CITY_SELECTED,
  valueCity,
  nameOfCityToSet,
});

export const updateNewBackgroundSelected = (newBackgroundSelected, nameOfNewBackground) => ({
  type: UPDATE_NEW_BACKGROUND_SELECTED,
  newBackgroundSelected,
  nameOfNewBackground,
});

export const updateNewAvatarSelected = (newAvatarSelected, nameAvatarToChange) => ({
  type: UPDATE_NEW_AVATAR_SELECTED,
  newAvatarSelected,
  nameAvatarToChange,
});

export const sendNewCity = () => ({
  type: SEND_NEW_CITY,
});

export const sendNewBackground = () => ({
  type: SEND_NEW_BACKGROUND,
});

export const sendNewAvatar = () => ({
  type: SEND_NEW_AVATAR,
});

export const setProfil = (profilUserArray) => ({
  type: SET_PROFIL,
  profilUserArray,
});



