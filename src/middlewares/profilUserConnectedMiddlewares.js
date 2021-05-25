import axios from 'axios';

import {
  LOAD_PROFIL_CONNECTED,
  setProfil,
  loadProfilConnected,
  SEND_NEW_AVATAR,
  SEND_NEW_BACKGROUND,
  SEND_NEW_CITY,
} from '../actions/profilConnected';
import {
  LOAD_USER_RESOLUTIONS,
  loadUserResolutions,
  setUserResolutions,
  DELETE_USER_RESOLUTION,
  loadUserArchivedResolutions,
} from '../actions/resolutionUser';
import { loadResolutionsConnected } from '../actions/resolutions';
import { NEW_PASSWORD } from '../actions/motivated';
import {
  setInitialUserCheckDay,
  setInitialUserCheckDayToShow,
  SEND_CHECK_DAYS,
} from '../actions/checkDays';
import { SEND_TESTIMONY } from '../actions/testimonyToSend';

const API_URL = 'http://ec2-3-92-198-2.compute-1.amazonaws.com/O-Motive/wp-json';

const profilUserConnectedMiddlewares = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_PROFIL_CONNECTED: {
      const customHeaders = {
        Authorization: `Bearer ${store.getState().auth.token}`,
      };
      axios.get(`${API_URL}/omotive/v1/users/${store.getState().auth.id}`, {
        headers: customHeaders,
      })
        .then((response) => {
          store.dispatch(setProfil(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case LOAD_USER_RESOLUTIONS: {
      const customHeaders = {
        Authorization: `Bearer ${store.getState().auth.token}`,
      };
      axios.get(`${API_URL}/omotive/v1/userresolutions/${store.getState().auth.id}`, {
        headers: customHeaders,
      })
        .then((response) => {
          store.dispatch(setUserResolutions(response.data));
          store.dispatch(setInitialUserCheckDayToShow(
            response.data,
          ));
          store.dispatch(setInitialUserCheckDay(
            response.data,
            response.data.map((resolution_id) => (resolution_id.resolution_id)),
            response.data.map((status) => (status.status)),
            response.data.map((duration) => (duration.duration)),
          ));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case DELETE_USER_RESOLUTION: {
      const customHeaders = {
        Authorization: `Bearer ${store.getState().auth.token}`,
      };
      const resolutionid = store.getState().resolutionsConnected.resolutionToDel;
      axios.delete(`${API_URL}/omotive/v1/delresolutionuser`, { params: { resolutionid }, headers: customHeaders })
        .then((response) => {
          store.dispatch(loadProfilConnected());
          store.dispatch(loadResolutionsConnected());
          store.dispatch(loadUserResolutions());
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case NEW_PASSWORD: {
      const customHeaders = {
        Authorization: `Bearer ${store.getState().auth.token}`,
      };
      const user_pass = store.getState().params.newPassword;
      axios.patch(`${API_URL}/omotive/v1/users/`, { user_pass }, { headers: customHeaders })
        .then((response) => {

        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case SEND_CHECK_DAYS: {
      const customHeaders = {
        Authorization: `Bearer ${store.getState().auth.token}`,
      };

      const { resolution, resolutions } = store.getState().checkDays;
      const resolutionToSend = resolutions.find((item) => item.resolution_id === resolution);

      axios.put(`${API_URL}/omotive/v1/editresolutionuser`, {
        resolutionid: resolutionToSend.resolution_id,
        status: resolutionToSend.status,
        duration: resolutionToSend.duration,
      }, { headers: customHeaders })
        .then((response) => {
          store.dispatch(loadProfilConnected());
          store.dispatch(loadResolutionsConnected());
          store.dispatch(loadUserResolutions());
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case SEND_TESTIMONY: {
      const customHeaders = {
        Authorization: `Bearer ${store.getState().auth.token}`,
      };
      const { title } = store.getState().testimonyToSend;
      const content = store.getState().testimonyToSend.testimony;
      const resolutionid = store.getState().testimonyToSend.resolutionId;
      const grade = store.getState().testimonyToSend.rate;
      axios.post(`${API_URL}/omotive/v1/testimonials`, {
        title,
        content,
        resolutionid,
        grade,
      }, { headers: customHeaders })
        .then((response) => {
          store.dispatch(loadProfilConnected());
          store.dispatch(loadResolutionsConnected());
          store.dispatch(loadUserResolutions());
          store.dispatch(loadUserArchivedResolutions());
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case SEND_NEW_AVATAR: {
      const customHeaders = {
        Authorization: `Bearer ${store.getState().auth.token}`,
      };
      const avatar = store.getState().profilUserConnected.newAvatar;
      axios.patch(`${API_URL}/omotive/v1/users`, {
        avatar,
      }, { headers: customHeaders })
        .then((response) => {
          store.dispatch(loadProfilConnected());
          store.dispatch(loadResolutionsConnected());
          store.dispatch(loadUserResolutions());
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case SEND_NEW_BACKGROUND: {
      const customHeaders = {
        Authorization: `Bearer ${store.getState().auth.token}`,
      };
      const imagebackground = store.getState().profilUserConnected.newBackground;
      axios.patch(`${API_URL}/omotive/v1/users`, {
        imagebackground,
      }, { headers: customHeaders })
        .then((response) => {
          store.dispatch(loadProfilConnected());
          store.dispatch(loadResolutionsConnected());
          store.dispatch(loadUserResolutions());
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case SEND_NEW_CITY: {
      const customHeaders = {
        Authorization: `Bearer ${store.getState().auth.token}`,
      };
      const { city } = store.getState().profilUserConnected;
      axios.patch(`${API_URL}/omotive/v1/users`, {
        city,
      }, { headers: customHeaders })
        .then((response) => {
          store.dispatch(loadProfilConnected());
          store.dispatch(loadResolutionsConnected());
          store.dispatch(loadUserResolutions());
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default profilUserConnectedMiddlewares;
