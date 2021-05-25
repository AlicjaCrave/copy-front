import { connect } from 'react-redux';

import ModalResolution from '../../components/PagesUsers/ProfilUser/ModalResolution';

const mapStateToProps = (state) => ({
  // élément à récup dans le state
  resolutions: state.resolutionsList,
  // userid: state.auth.id,
  // resolutionid: state.resolutions.resolutionid,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ModalResolution);