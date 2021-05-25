export const LOAD_POSTS = 'LOAD_POSTS';
export const SET_POSTS = 'SET_POSTS';

export const loadPosts = () => ({
  type: LOAD_POSTS,
});

export const setPosts = (postsArray) => ({
  type: SET_POSTS,
  postsArray,
});
