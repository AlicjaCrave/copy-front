import { connect } from 'react-redux';

import Blog from '../../components/Pages/Blog';

const mapStateToProps = (state) => ({
  // élément à récup dans le state
  posts: state.posts.postsList,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);