import axios from 'axios';

import {
  FETCH_TESTIMONIES, setTestimonies, LOAD_TESTIMONIES_HOMEPAGE, setTestimoniesHomepage,
} from '../actions/testimonies';

const API_URL = 'http://ec2-3-92-198-2.compute-1.amazonaws.com/O-Motive/wp-json/omotive/v1/testimonials/';

const testimoniesMiddlewares = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_TESTIMONIES: {
      axios.get(`${API_URL}10`)
        .then((response) => {
          store.dispatch(setTestimonies(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case LOAD_TESTIMONIES_HOMEPAGE: {
      axios.get(`${API_URL}3`)
        .then((response) => {
          store.dispatch(setTestimoniesHomepage(response.data));
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
export default testimoniesMiddlewares;
