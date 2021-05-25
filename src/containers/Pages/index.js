import { connect } from 'react-redux';

import Pages from '../../components/Pages';

const mapStateToProps = (state) => ({
  // élément à récup dans le state
  profilUser: state.profilUserConnected.profilUser,
  posts: state.posts.postsList,
  testimonies: state.testimonies.testimoniesList,
  testimoniesHomePage: state.testimonies.testimoniesListHomePage,
  motivated: state.motivated.motivatedList,
  isLogged: state.auth.isLogged,
  username: state.auth.username,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Pages);
