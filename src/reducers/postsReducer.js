import { SET_POSTS } from 'src/actions/posts';

const initialState = {
  postsList: [],
};

function postsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        postsList: action.postsArray,
      };

    default:
      return state;
  }
}

export default postsReducer;
