import { connect } from 'react-redux';
import ProfilUser from '../../components/PagesUsers/ProfilUser';
import { updateSelectToDelResolution, deleteUserResolution } from '../../actions/resolutionUser';
import {
  updateToCheckUserDay,
  updateIdOfResolutionToCheck,
} from '../../actions/checkDays';
import { updateIdOfResolutionToTestimony } from '../../actions/testimonyToSend';

const mapStateToProps = (state) => ({
  // élément à récup dans le state
  profilUser: state.profilUserConnected.profilUser,
  resolutionsUser: state.profilUserConnected.resolutionsUser,
  stateOfTheCheck: state.checkDays.stateOfTheCheck,
  resolutionid: state.checkDays.resolutionid,
  statusResolution: state.checkDays.statusResolution,
  day: state.checkDays.duration.day,
  status: state.checkDays.duration.status,
  resolutions: state.showChecksDays.resolutions,
  username: state.auth.username,
  city: state.profilUserConnected.city,

});

const mapDispatchToProps = (dispatch) => ({
  manageDeleteResolution: (idToDelResolution, nameToDelResolution, duration) => {
    dispatch(updateSelectToDelResolution(idToDelResolution, nameToDelResolution, duration));
  },
  deleteResolution: () => {
    dispatch(deleteUserResolution());
  },
  manageChangeCheckDay: (idToChangeDay, nameOfDayToChange) => {
    dispatch(updateToCheckUserDay(idToChangeDay, nameOfDayToChange));
  },
  manageChangeIdOChecksResolution: (idOfResolution, nameIdOfResolution) => {
    dispatch(updateIdOfResolutionToCheck(idOfResolution, nameIdOfResolution));
  },
  manageChangeIdOTestimonyResolution: (idOfResolution,
    nameIdOfResolutionTestimony,
    statusOfResolutionTestimony) => {
    dispatch(updateIdOfResolutionToTestimony(idOfResolution,
      nameIdOfResolutionTestimony,
      statusOfResolutionTestimony));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilUser);
