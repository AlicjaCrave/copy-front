import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './authReducer';
import inscriptionReducer from './inscriptionReducer';
import motivatedReducer from './motivatedReducer';
import postsReducer from './postsReducer';
import testimoniesReducer from './testimoniesReducer';
import profilUserConnectedReducer from './profilUserConnectedReducer';
import resolutionsConnectedReducer from './resolutionsConnectedReducer';
import addResolutionReducer from './addResolutions';
import checkDaysReducer from './chekDays';
import paramReducer from './paramReducer';
import showChecksDaysReducer from './showChecksDays';
import testimonyToSendReducer from './testimonyToSendReducer';

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'profilUserConnected', 'resolutionsConnected', 'addResolution', 'checkDays', 'showChecksDays', 'testimonyToSend', 'params'],
};

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['isLogged', 'token', 'id'],
};

const rootReducer = combineReducers({
  posts: postsReducer,
  testimonies: testimoniesReducer,
  auth: persistReducer(authPersistConfig, authReducer),
  inscription: inscriptionReducer,
  motivated: motivatedReducer,
  profilUserConnected: profilUserConnectedReducer,
  resolutionsConnected: resolutionsConnectedReducer,
  addResolution: addResolutionReducer,
  checkDays: checkDaysReducer,
  params: paramReducer,
  showChecksDays: showChecksDaysReducer,
  testimonyToSend: testimonyToSendReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
