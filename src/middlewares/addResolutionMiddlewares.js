import axios from 'axios';

import { NEW_RESOLUTION } from '../actions/resolutions';
import { loadUserResolutions } from '../actions/resolutionUser';
import { loadProfilConnected } from '../actions/profilConnected';
import { loadResolutionsConnected } from '../actions/resolutions';

const API_URL = 'http://ec2-3-92-198-2.compute-1.amazonaws.com/O-Motive/wp-json/omotive/v1/addresolutionuser';

const addResolutionMiddlewares = (store) => (next) => (action) => {
  switch (action.type) {
    case NEW_RESOLUTION: {
      const customHeaders = {
        Authorization: `Bearer ${store.getState().auth.token}`,
      };
      const resolutionid = store.getState().addResolution.resolutionid;
      axios.post(`${API_URL}`, { resolutionid }, { headers: customHeaders })
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
export default addResolutionMiddlewares;
