import axios from 'axios';

import { LOG_IN, saveUser } from '../actions/auth';
import { loadProfilConnected } from '../actions/profilConnected';
import { loadResolutionsConnected } from '../actions/resolutions';
import { loadUserResolutions, loadUserArchivedResolutions } from '../actions/resolutionUser';

const API_URL = 'http://ec2-3-92-198-2.compute-1.amazonaws.com/O-Motive/wp-json/jwt-auth/v1/token';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      const { username, password } = store.getState().auth;
      axios.post(`${API_URL}`, {
        username,
        password,
      })
        .then((response) => {
          console.log(response)
          store.dispatch(saveUser(
            response.data.success,
            response.data.data.token,
            response.data.data.id,
            response.data.success,
            response.data.message,
          ));
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
    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default authMiddleware;
