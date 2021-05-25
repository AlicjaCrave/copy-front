import axios from 'axios';

import { LOAD_RESOLUTIONS_CONNECTED, setResolutions } from '../actions/resolutions';
import { LOAD_USER_ARCHIVED_RESOLUTIONS, setUserArchivedResolutions } from '../actions/resolutionUser';

const API_URL = 'http://ec2-3-92-198-2.compute-1.amazonaws.com/O-Motive/wp-json/';

const resolutionsConnectedMiddlewares = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_RESOLUTIONS_CONNECTED: {
      const customHeaders = {
        Authorization: `Bearer ${store.getState().auth.token}`,
      };

      axios.get(`${API_URL}wp/v2/resolutions?_embed`, {
        headers: customHeaders,
      })
        .then((response) => {
          store.dispatch(setResolutions(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case LOAD_USER_ARCHIVED_RESOLUTIONS: {
      const customHeaders = {
        Authorization: `Bearer ${store.getState().auth.token}`,
      };

      axios.get(`${API_URL}omotive/v1/userarchivedresolutions/${store.getState().auth.id}`, {
        headers: customHeaders,
      })
        .then((response) => {
          store.dispatch(setUserArchivedResolutions(response.data));
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
export default resolutionsConnectedMiddlewares;
