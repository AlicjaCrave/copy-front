import axios from 'axios';

import { LOAD_POSTS, setPosts } from '../actions/posts';

const API_URL = 'http://ec2-3-92-198-2.compute-1.amazonaws.com/O-Motive/wp-json/wp/v2/posts?_embed';

const postsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_POSTS: {
      axios.get(`${API_URL}`)
        .then((response) => {
          store.dispatch(setPosts(response.data));
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
export default postsMiddleware;
