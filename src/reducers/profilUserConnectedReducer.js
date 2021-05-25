import {
  SET_PROFIL,
  UPDATE_NEW_AVATAR_SELECTED,
  UPDATE_NEW_BACKGROUND_SELECTED
} from 'src/actions/profilConnected';
import { LOG_OUT } from '../actions/auth';
import { UPDATE_NEW_CITY_SELECTED } from '../actions/profilConnected';
import { SET_USER_RESOLUTIONS } from '../actions/resolutionUser';

const initialState = {
  profilUser: [],
  resolutionsUser: [],
  newAvatar: '',
  newBackground: '',
  city: '',

};

function profilUserConnectedReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_PROFIL:
      return {
        ...state,
        profilUser: action.profilUserArray,
      };
    case SET_USER_RESOLUTIONS:
      return {
        ...state,
        resolutionsUser: action.resolutionsUserArray,
      };
    case UPDATE_NEW_CITY_SELECTED:
      return {
        ...state,
        [action.nameOfCityToSet]: action.valueCity,
      }
    case UPDATE_NEW_AVATAR_SELECTED:
      return {
        ...state,
        [action.nameAvatarToChange]: action.newAvatarSelected,
      };
    case UPDATE_NEW_BACKGROUND_SELECTED:
      return {
        ...state,
        [action.nameOfNewBackground]: action.newBackgroundSelected,
      }
    case LOG_OUT:
      return {
        ...state,
        profilUser: [],
        resolutionsUser: [],
        newAvatar: '',
        newBackground: '',
        city: '',
      };
    default:
      return state;
  }
}

export default profilUserConnectedReducer;
