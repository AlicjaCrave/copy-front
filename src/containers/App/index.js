import { connect } from 'react-redux';
import { loadMotivated } from '../../actions/motivated';
import { loadPosts } from '../../actions/posts';
import { fetchTestimonies, loadTestimoniesHomepage } from '../../actions/testimonies';
import App from '../../components/App';

const mapStateToProps = (state) => ({
  // élément à récup dans le state
});

const mapDispatchToProps = (dispatch) => ({
  loadPostsEffect: () => {
    dispatch(loadPosts())
  },
  loadMotivatedEffect: () => {
    dispatch(loadMotivated())
  },
  fetchTestimoniesEffect: () => {
    dispatch(fetchTestimonies())
  },
  loadTestimoniesHomepageEffect: () => {
    dispatch(loadTestimoniesHomepage())
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
