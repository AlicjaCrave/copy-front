import { connect } from 'react-redux';

import ConnexionPage from 'src/components/Pages/ConnexionPage';

import { updateUserField, logIn } from 'src/actions/auth';

const mapStateToProps = (state) => ({
  // élément à récup dans le state
  username: state.auth.username,
  password: state.auth.password,
  isLogged: state.auth.isLogged,
  success: state.auth.success,
  message: state.auth.message,

});

const mapDispatchToProps = (dispatch) => ({
  // dispatch l'action
  manageChange: (newValue, name) => {
    // console.log(`New Value ${newValue} for the field ${name}`);
    dispatch(updateUserField(newValue, name));
  },
  handleLogin: () => {
    dispatch(logIn());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnexionPage);
