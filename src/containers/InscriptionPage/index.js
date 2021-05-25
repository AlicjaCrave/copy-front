import { connect } from 'react-redux';

import { updateUserFieldInscription, newInscription } from 'src/actions/auth';
import InscriptionPage from '../../components/Pages/InscriptionPage/index.js';

const mapStateToProps = (state) => ({
  // élément à récup dans le state
  username: state.inscription.username,
  first_name: state.inscription.first_name,
  last_name: state.inscription.last_name,
  password: state.inscription.password,
  confirmPassword: state.inscription.confirmPassword,
  email: state.inscription.email,
});

const mapDispatchToProps = (dispatch) => ({
  // dispatch l'action
  manageChangeInscription: (data) => {
    // console.log(`New Value ${newValue} for the field ${name}`);
    dispatch(updateUserFieldInscription(data));
  },
  handleInscription: () => {
    dispatch(newInscription())
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InscriptionPage);