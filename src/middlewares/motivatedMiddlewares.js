import axios from 'axios';

import { LOAD_MOTIVATED, setMotivated } from '../actions/motivated';

const API_URL = 'http://ec2-3-92-198-2.compute-1.amazonaws.com/O-Motive/wp-json/omotive/v1/users';

const motivatedMiddlewares = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_MOTIVATED: {
      axios.get(`${API_URL}`)
        .then((response) => {
          store.dispatch(setMotivated(response.data));
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
export default motivatedMiddlewares;
