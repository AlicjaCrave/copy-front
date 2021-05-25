import { connect } from 'react-redux';
import { logOut } from '../../actions/auth';

import Header from '../../components/Header';

const mapStateToProps = (state) => ({
  // élément à récup dans le state
  isLogged: state.auth.isLogged,
  username: state.auth.username,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(logOut());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);