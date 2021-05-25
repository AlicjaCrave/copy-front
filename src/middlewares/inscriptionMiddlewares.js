import axios from 'axios';

import { NEW_INSCRIPTION } from '../actions/auth';

const API_URL = 'http://ec2-3-92-198-2.compute-1.amazonaws.com/O-Motive/wp-json/wp/v2/users/register';

const inscriptionMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case NEW_INSCRIPTION: {
      const { username, password, email } = store.getState().inscription;
      axios.post(`${API_URL}`, {
        username,
        password,
        email,
      })
        .then((response) => {
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
export default inscriptionMiddleware;
