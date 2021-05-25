import { connect } from 'react-redux';
import { updateUserFieldParam, newPassword } from 'src/actions/motivated';

import ParamUser from '../../../components/PagesUsers/ParamUser';

const mapStateToProps = (state) => ({
  // élément à récup dans le state
  profilUser: state.profilUserConnected.profilUser,
  newPassword: state.params.newPassword,
  confirmNewPassword: state.params.confirmNewPassword,
  username: state.auth.username,
});

const mapDispatchToProps = (dispatch) => ({
  manageChangePassword: (newValueParam, nameParam) => {
    dispatch(updateUserFieldParam(newValueParam, nameParam));
  },
  handleParams: () => {
    dispatch(newPassword())
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ParamUser);
